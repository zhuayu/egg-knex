'use strict';

const Controller = require('egg').Controller;
const User = require("./../model/user.js");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const users = await User.show({ id: 1 });
    ctx.body = { data: users}
  }
}

module.exports = HomeController;
