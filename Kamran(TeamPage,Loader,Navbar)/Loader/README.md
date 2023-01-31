# Loader
### Preview: https://youtu.be/-77pIXjfoXc
### Install JQuery-UI and Import


```

import $ from "jquery";`<br/>
import "jquery-ui-dist/jquery-ui.min";
import { useEffect } from "react";
import loader_img from './gfglogo.png;


function App() {
    useEffect(() => {
    // loader Script
     $("body").prepend(
       '<div className="loader_bg">
       <div className="pulse1"></div>
       <div className="pulse2"></div>
       <div className="loader d-flex justify-content-center">
       <img src={loader_img}alt="#"/>
       </div>
       </div>'
     );
     $(document).ready(function () {
       setTimeout(function () {
         $(".loader_bg").remove();
       }, 3500);
     });

    },[]);
  return{
    ...
  }
}
```
## CSS:

```
.loader_bg {
  position: fixed;
  z-index: 999999;
  background: var(--primary-color);
  width: 100%;
  height: 100%;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
}
.loader > img {
  width: 180px;
  height: 180px;
}

.pulse1 {
  position: absolute;
  width: 200px;
  height: 200px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  border: 3px solid rgba(255, 255, 255, 0.1);
  animation: pulsejg1 1.5s linear infinite;
  border-radius: 999px;
  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
}

.pulse2 {
  position: absolute;
  width: 200px;
  height: 200px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0);
  animation: pulsejg2 1.5s linear infinite;
  border-radius: 999px;
  box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
}


@keyframes pulsejg1 {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }

  50% {
    transform: scale(0.6);
    opacity: 0;
  }

  60% {
    transform: scale(0.9);
    opacity: 0.1;
  }

  70% {
    transform: scale(1.1);
    opacity: 0.25;
  }

  80% {
    transform: scale(1.25);
    opacity: 0.1;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@keyframes pulsejg2 {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }

  40% {
    transform: scale(0.8);
    opacity: 0.05;
  }

  50% {
    transform: scale(1);
    opacity: 0.1;
  }

  60% {
    transform: scale(1.1);
    opacity: 0.3;
  }

  80% {
    transform: scale(1.2);
    opacity: 0.1;
  }

  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
```
