"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const UserModel_1 = require("../models/UserModel");
class UserService {
    constructor() {
        this._saltRound = 12;
        this._jwtSecret = 'mysercret';
    }
    register({ email, password }) {
        bcrypt.hash(password, this._saltRound)
            .then(hash => {
            return UserModel_1.UserModel.create({ email, password: hash })
                .then(u => u);
        });
    }
    login(user) {
        let u = UserModel_1.UserModel.findByEmail(user.email);
        const { id, email } = u;
        return { token: jwt.sign({ id, email }, this._jwtSecret) };
    }
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this._jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false);
                    return;
                }
                let _user = UserModel_1.UserModel.findByEmail(decoded['email']);
                if (_user) {
                    resolve(true);
                }
                return;
            });
        });
    }
    getUserById(id) {
        return UserModel_1.UserModel.findById(id);
    }
}
exports.UserService = UserService;
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map