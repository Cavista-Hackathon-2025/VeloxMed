from flask import Flask
from flask_cors import CORS
import sqlite3
from flask import request, jsonify

app = Flask(__name__)
CORS(app)

def init_db():
    conn = sqlite3.connect('beds.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS beds
                 (id INTEGER PRIMARY KEY, status TEXT, location TEXT)''')
    conn.commit()
    conn.close()

init_db()

@app.route('/beds', methods=['GET'])
def get_beds():
    conn = sqlite3.connect('beds.db')
    c = conn.cursor()
    c.execute('SELECT * FROM beds')
    beds = c.fetchall()
    c.execute('SELECT COUNT(*) FROM beds WHERE status="available"')
    available_beds = c.fetchone()[0]
    c.execute('SELECT COUNT(*) FROM beds WHERE status="occupied"')
    occupied_beds = c.fetchone()[0]
    conn.close()
    beds_list = [{"id": bed[0], "status": bed[1], "location": bed[2]} for bed in beds]
    response = {
        "beds": beds_list,
        "available_beds": available_beds,
        "occupied_beds": occupied_beds
    }
    return jsonify(response)
    

@app.route('/beds/summary', methods=['GET'])
def get_beds_sum():
    conn = sqlite3.connect('beds.db')
    c = conn.cursor()
    c.execute('SELECT * FROM beds')
    beds = c.fetchall()
    c.execute('SELECT COUNT(*) FROM beds WHERE status="available"')
    available_beds = c.fetchone()[0]
    c.execute('SELECT COUNT(*) FROM beds WHERE status="occupied"')
    occupied_beds = c.fetchone()[0]
    conn.close()
    beds_list = [{"id": bed[0], "status": bed[1], "location": bed[2]} for bed in beds]
    response = {
        "available_beds": available_beds,
        "occupied_beds": occupied_beds
    }
    return jsonify(response)

@app.route('/beds/occupy', methods=['POST'])
def occupy_bed():
    bed_id = request.json['id']
    conn = sqlite3.connect('beds.db')
    c = conn.cursor()
    c.execute('SELECT status FROM beds WHERE id=?', (bed_id,))
    bed = c.fetchone()
    if bed and bed[0] == 'available':
        c.execute('UPDATE beds SET status="occupied" WHERE id=?', (bed_id,))
        conn.commit()
        conn.close()
        return jsonify({"message": "Bed occupied successfully"}), 200
    conn.close()
    return jsonify({"message": "Bed not available or does not exist"}), 400

@app.route('/beds/add', methods=['POST'])
def add_bed():
    location = request.json['location']
    conn = sqlite3.connect('beds.db')
    c = conn.cursor()
    c.execute('INSERT INTO beds (status, location) VALUES ("available", ?)', (location,))
    conn.commit()
    bed_id = c.lastrowid
    conn.close()
    return jsonify({"message": "Bed added successfully", "id": bed_id}), 201

@app.route('/beds/status/<int:bed_id>', methods=['GET'])
def bed_status(bed_id):
    conn = sqlite3.connect('beds.db')
    c = conn.cursor()
    c.execute('SELECT status, location FROM beds WHERE id=?', (bed_id,))
    bed = c.fetchone()
    conn.close()
    if bed:
        return jsonify({"id": bed_id, "status": bed[0], "location": bed[1]})
    return jsonify({"message": "Bed not found"}), 404

@app.route('/beds/delete/<int:bed_id>', methods=['DELETE'])
def delete_bed(bed_id):
    conn = sqlite3.connect('beds.db')
    c = conn.cursor()
    c.execute('DELETE FROM beds WHERE id=?', (bed_id,))
    conn.commit()
    conn.close()
    return jsonify({"message": "Bed deleted successfully"}), 200

@app.route('/beds/unoccupy', methods=['POST'])
def unoccupy_bed():
    bed_id = request.json['id']
    conn = sqlite3.connect('beds.db')
    c = conn.cursor()
    c.execute('SELECT status FROM beds WHERE id=?', (bed_id,))
    bed = c.fetchone()
    if bed and bed[0] == 'occupied':
        c.execute('UPDATE beds SET status="available" WHERE id=?', (bed_id,))
        conn.commit()
        conn.close()
        return jsonify({"message": "Bed unoccupied successfully"}), 200
    conn.close()
    return jsonify({"message": "Bed not occupied or does not exist"}), 400

if __name__ == '__main__':
    app.run('0.0.0.0', 23622, debug=True)