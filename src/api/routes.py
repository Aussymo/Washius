from flask import Flask, request, jsonify, url_for, Blueprint, redirect, session, logging
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"Message": "User not found"}), 401
    if password != user.password:
        return jsonify({"Message": "invalid password"}), 401
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)
    print(access_token)

@api.route("/user/active", methods=["POST"])
def active_user():
    print("Active user")
    body=request.get_json()
    one_user = User.query.filter_by(email=body["email"]).first()
    return jsonify(one_user.serialize()), 200

@api.route("/user/<int:id>", methods=["GET"])
def single_user(id):
    single_user = user.query.get(id)
    return jsonify(single_user.serialize()), 200

@api.route("/signup", methods=["POST"])
def create_user():
    body = request.get_json()
    email = body["email"]
    username = body["username"]
    password = body["password"]
    phone_number = body["phone_number"]
    user = User(email=email, password=password)
    
    user = User(username=username, phone_number=phone_number, email=email, password=password)

    db.session.add(user)
    db.session.commit(user)
    
    return (jsonify(user.serialize))