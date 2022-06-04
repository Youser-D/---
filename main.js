/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
 var app = new Vue({
    el:"#app",
    data:{
        city:"无锡",
        weatherList:[]
    },
    methods:{
        searchWeather:function(){
            // console.log("search");
            // console.log(this.city);

            // 保存this
            var that = this;

            axios
            .get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)

            // 成功之后调取
            .then(function(response){
                // console.log(response);
                // console.log(response.data.data.forecast);

                // 这里就直接是that.weatherList而不是that.data.weatherList
                // 还要注意：调用此函数的是服务器端，所这里的this不是Vue中的this
                that.weatherList=response.data.data.forecast
                // app.weatherList=response.data.data.forecast

            })
            // // 箭头函数方式
            // .then(response => {
            //     this.weatherList = response.data.data.forecast
            // })
            // 失败之后调取
            .catch(function(err){})
        },
        changeCity:function(city){
            this.city=city;
            this.searchWeather();
        }

    }

 })