const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    // alert("run");
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = "please write the name before search ";
        data_hide.classList.add('data_hide');
    }
    else{
        try{

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e38704cbb33db1edde658183eadc3af1`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data]; 
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;
            // temp_status.innerText = arrdata[0].weather[0].main;
            console.log(arrdata);
            const tempMod = arrdata[0].weather[0].main;

            if(tempMod=="Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMod=="Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#009ad8;'></i>";
            }else if(tempMod=="Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-showers-heavy' style='color:#009ad8'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#009ad8;'></i>";
            }
            data_hide.classList.remove('data_hide');
            

        }catch{
            city_name.innerText = "please enter city name properly";
            // temp.style.visibility = "hidden";
            data_hide.classList.add('data_hide');
            temp_status.style.visibility = "hidden";
        }
            
    }
}

submitBtn.addEventListener("click",getInfo);