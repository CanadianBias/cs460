#!/usr/bin/python3

# Flask server for handling JSON input
# Sourced from ChatGPT 3.5, prompt "Sending JSON string to server-side JSON file", "On the server side, use python, and use the fetch api instead"

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/save_json', methods=['POST'])
def save_json():
    # Get JSON data from request
    json_data = request.json
    
    # Write JSON data to a file
    with open('entryList.json', 'w') as f:
        json.dump(json_data, f)
    
    return jsonify({'message': 'JSON data saved successfully'})

if __name__ == '__main__':
    app.run(debug=True)
