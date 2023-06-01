from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/convert", methods=["POST"])
def convert():
	data = request.get_json()
	input_text = data["input"]
		
	# uppercase_text = input_text.upper()
	# return jsonify(uppercase_text)

	
	converted_text = ""
	for char in input_text:
		if char.islower():
			converted_text += char.upper()
		elif char.isupper():
			converted_text += char.lower()
		else:
			converted_text += char
	
	return jsonify(converted_text)


@app.route('/test', methods=['GET', 'POST'])
def testfn():
	# GET request
	if request.method == 'GET':
		message = {'greeting':'Hello from Flask!'}
		return jsonify(message)  # serialize and use JSON headers
	# POST request
	if request.method == 'POST':
		print(request.get_json())  # parse as JSON
		return 'Sucesss', 200
	
if __name__ == "__main__":
	app.run()