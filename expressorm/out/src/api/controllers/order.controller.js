"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = __importDefault(require("../../service/order.service"));
class OrderController {
    getOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield order_service_1.default.getOrders();
            res.status(200).send(orders);
        });
    }
    placeOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield order_service_1.default.placeOrder(req.body);
            res.status(201).send(order);
        });
    }
}
exports.OrderController = OrderController;
exports.default = new OrderController();
//# sourceMappingURL=order.controller.js.map