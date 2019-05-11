'use strict';

const { Controller } = require('egg');

class GoodsControllerController extends Controller {

  async createNewGood() {
    const { goods } = this.ctx.request.body;
    const created = await this.ctx.service.goods.createNewGoods(goods);
    this.ctx.body = {
      code: 0,
      data: {
        goods: created,
      },
    };
  }

  async listGoods() {
    const { query } = this.ctx.request;
    const goods = await this.ctx.service.goods.listGoods(query);
    this.ctx.body = {
      code: 0,
      data: {
        goods,
      },
    };
  }

  async getGood() {
    const { id } = this.ctx.params;
    const goods = await this.ctx.service.goods.listGoods({ ids: [id] });
    this.ctx.body = {
      code: 0,
      data: {
        goods: goods[0],
      },
    };
  }

  async updateGood() {
    const { id } = this.ctx.params;
    const { goods } = this.ctx.request.body;
    goods.id = id;
    await this.ctx.service.goods.updateGoods(goods);
    this.ctx.body = {
      code: 0,
    };
  }

}

module.exports = GoodsControllerController;