'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /**
   * @apiVersion 0.1.0
   * @api {POST} /user 创建用户
   * @apiGroup site
   * 
   * @apiParam {String} username 用户名
   * @apiParam {String} password 密码
   * 
   * @apiSuccess {Integer} code 响应码
   * @apiSuccess {Object} data 数据
   * @apiSuccess {OBject} data.user 用户对象
   * @apiSuccess {String} data.user.id 用户id, uuidv4版本
   * 
   * @apiSuccessExample Success-Response:
   * {
    "code": 0,
    "result": "ok",
    "description": "success",
    "data": {
        "send_order": 1,
        "unpaid_order": 2,
        "user": {
            "email": "",
            "icon": "//www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_PclogoS_8whnvm25&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pcs",
            "mobile": "131****4068",
            "userName": "tony",
            "user_id": 1313124239
        }
    }
}
   */
  router.post('/user', controller.site.createUser);
  router.get('/user', controller.site.getUser);
  router.post('/login', controller.site.loginWithUnPw);
  router.get('/', controller.site.index);
  router.post('/logout', controller.site.logout);
  // router.post('/sendVerifyCode', controller.site.sendVerifyCode);

  router.post('/api/v1/admin/product', controller.adminProduct.createNewProduct);
  router.get('/api/v1/admin/product/:id', controller.adminProduct.getProduct);
  router.get('/api/v1/admin/product', controller.adminProduct.listProducts);
  router.patch('/api/v1/admin/product/:id', controller.adminProduct.updateProduct);

  router.get('/api/v1/site/product/:id', controller.product.getProduct);

  router.post('/api/v1/admin/goods', controller.adminGoods.createNewGood);
  router.get('/api/v1/admin/goods/:id', controller.adminGoods.getGood);
  router.get('/api/v1/admin/goods', controller.adminGoods.listGoods);
  router.patch('/api/v1/admin/goods/:id', controller.adminGoods.updateGood);
  // B端API 通用前缀： /api/v1/admin/
  // 商品
  /**
   * @apiVersion 0.1.0
   * @api {GET} /product/:product_id 商品管理-详情
   * @apiGroup ADMIN/PRODUCT
   *
   * @apiParam {String} product_id 商品id
   *
   * @apiSuccess {String} default_goods_id 默认goods_id
   * @apiSuccess {Object} product_info 产品信息
   * @apiSuccess {Boolean} product_info.is_batched 是否打包销售？
   * @apiSuccess {Boolean} product_info.is_enable 是否上架？
   * @apiSuccess {String} product_info.name 商品名称
   * @apiSuccess {Object} product_info.price_tips 建议价格？
   * @apiSuccess {String} product_info.product_desc 商品简述
   * @apiSuccess {String} product_info.product_id 商品id
   * @apiSuccess {String} product_info.product_gallery_icon 相册图片
   * @apiSuccess {String} product_info.share_content 分享内容
   * @apiSuccess {Array} product_info.goods_ids goods_id数组
   *
   * @apiSuccessExample Success-Response:
   {
  "code": 0,
    "result": "ok",
    "description": "success",
    "data": {
    "default_goods_id": "2181500027",
      "product_info": {
      "activity_tips": {
        "action": {},
        "img_url": ""
      },
      "is_batched": false,
        "is_enable": true,
        "name": "小米6X",
        "price_tips": {},
      "product_desc": "<font color='#ff4a00'>「4GB+64GB赠价值59元蓝牙耳机」</font>前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / “杨柳腰”纤薄机身 / 标配骁龙660 AIE处理器",
        "product_gallery_icon": {},
      "product_id": 10000091,
        "share_content": ""
    },
  }
}
   *
   */

};
