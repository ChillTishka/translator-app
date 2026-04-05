body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #74ebd5, #ACB6E5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 15px;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: none;
  margin-bottom: 15px;
}

button#translateBtn {
  position: relative;
  width:11em;
  height: 4em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: 700;
  color: #2761c3;
  cursor: pointer;
  text-align: center;
  letter-spacing: 2px;
  line-height: 4em;
  padding-left: 0px;   /* смещаем текст правее */
}


#clip {
  --color: #2761c3;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 5px double var(--color);
  box-shadow: inset 0px 0px 15px #195480;
  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

.arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #2761c3;
  top: 35%;
  width: 11%;
  height: 30%;
}

#leftArrow {
  left: -13.5%;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

#rightArrow {
  -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 108%;   /* перемещаем стрелку правее */
}


button#translateBtn:hover {
  color: #27c39f;
}

button#translateBtn:hover #rightArrow {
  background-color: #27c39f;
  left: -15%;
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

button#translateBtn:hover #leftArrow {
  background-color: #27c39f;
  left: 103%;
  animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.corner {
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: #2761c3;
  box-shadow: inset 1px 1px 8px #2781c3;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}

#rightTop {
  top: -1.98em;
  left: 91%;
}

#leftTop {
  top: -1.96em;
  left: -3.0em;
}

#leftBottom {
  top: 2.10em;
  left: -2.15em;
}

#rightBottom {
  top: 45%;
  left: 88%;
}

button#translateBtn:hover #leftTop {
  animation: 0.1s ease-in-out 0.05s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

button#translateBtn:hover #rightTop {
  animation: 0.1s ease-in-out 0.15s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

button#translateBtn:hover #rightBottom {
  animation: 0.1s ease-in-out 0.25s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

button#translateBtn:hover #leftBottom {
  animation: 0.1s ease-in-out 0.35s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

button#translateBtn:hover .corner {
  transform: scale(1.25) rotate(45deg);
}

button#translateBtn:hover #clip {
  animation: 0.2s ease-in-out 0.55s both greenLight8;
  --color: #27c39f;
}

@keyframes changeColor8 {
  from { background-color: #2781c3; }
  to { background-color: #27c39f; }
}

@keyframes lightEffect8 {
  from { box-shadow: 1px 1px 5px #27c39f; }
  to { box-shadow: 0 0 2px #27c39f; }
}

@keyframes greenLight8 {
  to { box-shadow: inset 0px 0px 32px #27c39f; }
}

@keyframes leftArrow8 {
  from { transform: translate(0px); }
  to { transform: translateX(10px); }
}

@keyframes rightArrow8 {
  from { transform: translate(0px); }
  to { transform: translateX(-10px); }
}

#output {
  margin-top: 15px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
  min-height: 50px;
  border: 1px solid #ddd;
}
