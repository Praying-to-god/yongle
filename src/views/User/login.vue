<template>
  <!-- 登录页 -->
  <div class="login">
    <div class="login-bg">
      <div class="header">
        <div class="head-icon">
          <router-link to='/main' class="gobacks"><i class="iconfont icon-zuojiantou"></i></router-link>
        </div>
      </div>
      <div class="login">
        <h3>会员登录</h3>
        <div class="content">
          <form id="form">
            <div class="from">
              <label>
                <input type="text" class="tel" placeholder="手机号 / 邮箱地址">
                <i class="iconfont icon-iconzh1 ico-tel"></i>
              </label>
              <label>
                <input type="password" class="pwd" placeholder="请输入密码">
                <i class="iconfont icon-mimakai"></i>
                <i class="iconfont icon-mimasuo ico-tel"></i>
                <i class="iconfont icon-yanjing_yincang_o"></i>
              </label>
            </div>
            <div class="exempt">
              <label>
                <i class="iconfont icon-BAI-danxuankuang"></i>
                <input type="checkbox" class="check">
                <span>两周内免登录</span>
              </label>
              <a class="fr">忘记密码</a>
            </div>
            <div class="login-btn">登录</div>
            <div class="other-login-type">
              <ul>
                <li><a><i class="iconfont icon-baidu"></i></a></li>
                <li><a><i class="iconfont icon-weibo"></i></a></li>
                <li><a><i class="iconfont icon-web-icon-"></i></a></li>
              </ul>
            </div>
          </form>
        </div>
        <div class="foot">
          <router-link to="/register" class="go-register">马上注册</router-link>
          <p>登录注册表示同意
          <a>永乐票务用户服务协议</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .login-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: url(//m2static.228.cn/images/loginBg.jpg) no-repeat;
    background-size: 100%;

    .header{
      height: 60px;
      padding: 30px 15px 0 15px;
      box-sizing: border-box;
      
      .gobacks{
        display: block;
        text-align: center;
        line-height: 30px;
        width: 30px;
        height: 31px;

        i{
          color: antiquewhite;
          font-size: 15px;
        }
      }
    }

    .login{
      width: 276px;
      height: 518px;
      margin: 30px 50px 0;

      h3{
        color: #fff;
        font-size: 32px;
        margin-bottom: 30px;
        font-weight: bold;
      }

      label{
        display: block;
        position: relative;
        font-size: 12px;
        margin-bottom: 20px;

        input{
          width: 221px;
          height: 46px;
          border: 1px solid rgba(255, 255, 255, 6);
          border-radius: 100px;
          text-align: center;
          color: rgba(255, 255, 255, 9);
          font-size: 16px;
          padding: 0 30px 0 20px;
          background: rgba(0,0,0,0);
        }

        input:hover{
          border: 1px solid #ff2959;
        }

        i{
          color: #B3B9BD;
          font-size: 20px;
        }

        .ico-tel{
          position: absolute;
          top: 13px;
          left: 25px;
        }

        .icon-yanjing_yincang_o{
          position: absolute;
          right: 12px;
          top: 10px;
          font-size: 28px;
        }

        .icon-mimakai{
          position: absolute;
          top: 13px;
          left: 25px;
          display: none;
        }
      }

      .exempt{
        color: rgba(255, 255, 255, 0.7);
        margin: 0 10px;
        overflow: hidden;

        .check{
          width: 15px;
          height: 15px;
          margin-top: 0;
          margin-right: 5px;
          vertical-align: middle;
          opacity: 100;
        }

        .icon-BAI-danxuankuang{
          position: absolute;
          top: -2px;
          left: 0px;
          opacity: 0;
        }

        label{
          float: left;
          margin-bottom: 0;
        }

        span{
          font-size: 14px;
        }

        .fr{
          float: right;
          font-size: 14px;
        }
      }

      .login-btn{
        width: 100%;
        height: 45px;
        background: rgba(255, 255, 255, .7);
        color: #fff;
        border-radius: 100px;
        opacity: 0.8;
        font-size: 16px;
        line-height: 45px;
        margin-top: 20px;
        text-align: center;
      }

      .other-login-type{
        ul{
          display: flex;
          margin: 50px 25px 0;

          li{
            flex: 1;
            text-align: center;
            display: block;
            height: 25px;

            i{
              font-size: 27px;
              color: #CA505A;
            }
          }
        }
      }

      .foot{
        margin-top: 80px;
        width: 100%;
        text-align: center;
        margin-bottom: 40px;

        .go-register{
          font-size: 14px;
          margin-bottom: 40px;
          display: block;
          color: #ff3a56;
        }

        p{
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;

          a{
            color: rgba(255, 58, 86, 0.6);
            font-size: .11rem;
            text-decoration: underline;
            font-size: 12px;
          }
        }
      }
    }
  }
  

</style>
