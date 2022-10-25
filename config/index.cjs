/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx06f6618b4feeb0d3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4a9f3e97eaab747c5aebec16e7299b4e',

  PROVINCE: '河北',
  CITY: '唐山',

  USERS: ["sqt2350739321"]
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9III6AjVAxIoGMswzegTtMS2JG4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'X5-0Z-IAyKIulNyXjLqEvjTYVk3nqw3GJkh7aOgKZNc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '潇潇', year: '2002', date: '12-10',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '涛涛', year: '2002', date: '10-01',
        },
        {
          type: '节日', name: '相识纪念日', year: '2015', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2015-09-03' },
        // 情人节
        { keyword: 'marry_day', date: '2023-02-14' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'X5-0Z-IAyKIulNyXjLqEvjTYVk3nqw3GJkh7aOgKZNc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9III6AjVAxIoGMswzegTtMS2JG4',
    }
  ],

}

module.exports = USER_CONFIG

