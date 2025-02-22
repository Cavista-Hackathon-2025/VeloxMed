from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm, UserRegistrationForm, UserEditForm, ProfileEditForm, AdditionEditForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LogoutView
from .models import Profile, Additional_Info, Message
from django.contrib import messages
from django.contrib.auth.models import User
from django.conf import settings
from django.core.mail import send_mail
import smtplib
from django.http import Http404

def error_404_view(request, exception):
    return render(request, 'account/404.html', {}, status=404)


def register(request):
    if request.method == 'POST':
        user_form = UserRegistrationForm(request.POST)
        if user_form.is_valid():
            # Create a new user object but avoid saving it yet
            new_user = user_form.save(commit=False)
            # Set the chosen password
            new_user.set_password(
                user_form.cleaned_data['password'])
            # Save the User object
            new_user.save()
            # Create the user profile
            Profile.objects.create(user=new_user)
            Additional_Info.objects.create(user=new_user)
            return render(request,
                'account/register_done.html',
                {'new_user': new_user})
    else:
        user_form = UserRegistrationForm()
    return render(request,
        'account/register.html',
        {'user_form': user_form})


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request, 
                                username = cd['username'],
                                password = cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponse('Authenticated '\
                        'successfully')
                else:
                    return HttpResponse('Disabled account')
            else:
                return HttpResponse('Invalid login')
    else:
        LoginForm()
    return render(request, 'account/login.html', {'form':form})

@login_required
def dashboard(request):
    profile = request.user.profile
    return render(request,
                  'account/dash_home.html',
                  {'section':'dashboard',
                   'profile': profile},)

class LogoutView(LogoutView):
    def get(self, request):
        logouts = logout(request)
        return render(request, 'registration/logged_out.html', {'logout':logout})
        # return redirect('login')
        


@login_required
def edit_additional_info(request):
    # Ensure the additional_info object exists for the user
    additional_info, created = Additional_Info.objects.get_or_create(user=request.user)

    if request.method == 'POST':
        additional_info_form = AdditionEditForm(instance=additional_info, data=request.POST)
        
        if additional_info_form.is_valid():
            additional_info_form.save()
            messages.success(request, 'Additional Information updated successfully')
              # or wherever you want to redirect after successful update
        else:
            messages.error(request, 'Error updating your additional information')
    else:
        additional_info_form = AdditionEditForm(instance=additional_info)
    
    return render(request, 'account/edit_additional_info.html', {
        'additional_info_form': additional_info_form,
        'section': 'edit',
    })
    
@login_required
def edit(request):
    if request.method == 'POST':
        user_form = UserEditForm(instance=request.user, data=request.POST)
        profile_form = ProfileEditForm(instance=request.user.profile, data=request.POST, files=request.FILES)
        
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            messages.success(request, 'Profile updated successfully')
        else:
            messages.error(request, 'Error updating your profile')
    else:
        user_form = UserEditForm(instance=request.user)
        profile_form = ProfileEditForm(instance=request.user.profile)
    
    return render(request, 'account/edit.html', {
        'user_form': user_form,
        'profile_form': profile_form,
        'section': 'edit'
    })
            

def home(request):
    return render(request, 'Home_Page/home.html')

def subscribe(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            try:
                with smtplib.SMTP_SSL(settings.EMAIL_HOST, settings.EMAIL_PORT2) as connection:
                    connection.login(user=settings.EMAIL_HOST_USER, password=settings.EMAIL_HOST_PASSWORD)
                    connection.sendmail(
                        from_addr=settings.EMAIL_HOST_USER,
                        to_addrs='ukwedjedimeji@gmail.com',
                        msg=f'Subject:Daily Quotes\n\nNew subscription from: {email}\n\nMessage: congrats dawg'
                    )
                    connection.close()

                return render(request, 'account/subscription_successful.html')
            except Exception as e:
                return render(request, 'account/invalid_request.html')
        else:
            return render(request, 'account/invalid_email.html')
    return render(request, 'account/invalid_request.html')

def public_profile(request, username):
    user = User.objects.get(username=username)
    return render(request, 'account/public_profile.html', {'user': user, 'section':'profile_search'})

