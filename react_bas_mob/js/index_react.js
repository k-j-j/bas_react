function Compo(){
    return(
        <>
            <Header />
            <Nav />
            <Wrapcomponent />
            <Footer />
        </>
    )
}

// Header
function Header() {
    return(
        <header id="header">
        <h1><a href="#"><img src="img/logo.png" alt="logo"/></a></h1>
        <div id="menu">
          <a href="#">FOM</a>
          <a href="#">STORE</a>
          <a href="#">단체주문</a>
          <button class="hm">
            <img src="img/btn_menu.png" alt="ham_btn"/>
          </button>
        </div>
        </header>
        
        
    )
}



function Nav() {
    return(
        <>
        <nav className="menu">
  <div className="head">
    <button className="cross">&#735;</button>
    <ul className="cf">
      <li className="fr"><a href="#">LOGIN</a></li>
      <li><a href="#">JOIN</a></li>    
      <li className="search">
        <a href="#"><img src="img/btn_search.png" alt="search"/></a>       
      </li>  
    </ul>
  </div>
 <ul className="mm">
  <li><a href="#">BRAND<img src="img/ico_nav.png" alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
  <li><a href="#">PRODUCT<img src="img/ico_nav.png" alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
  <li><a href="#">STORE<img src="img/ico_nav.png" alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
  <li><a href="#">EVENT<img src="img/ico_nav.png" alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
  <li><a href="#">ABOUT<img src="img/ico_nav.png" alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
 </ul>
</nav>
        
</>     
    )
}



function Wrapcomponent(){
    return(
        <>
            <Main />
            <Content />
            <Footer />
        </>
    )
}
function Main(){
        return(
        <section id="main">
           <div id="main">
          <a href="#"><img src="img/banner.jpg" alt="b"/></a>
          </div>
        </section>
    )
}
function Content(){
 
    return(
        <>
        <div id="slide">
        <ul className="cf">
            <li><img src="img/b1.png" alt="b1"/></li>
            <li><img src="img/b2.png" alt="b1"/></li>
            <li><img src="img/b3.png" alt="b1"/></li>
        </ul>
        <div id="roll">
            <a href="#" className="on"></a>
            <a href="#"></a>
            <a href="#"></a>
        </div>
      </div>
      <section id="list">
  <h3>BR EVENT</h3>
  <ul className="cf">
    <li>
      <a href="#">
        <img src="img/list1.png" alt="lst1"/>
        <span className="im"><img src="img/stit_store.gif" alt="sit_store"/></span>
        <span className="txt">해피오더 딜리버리로 간편하게 주문하세요!</span>
        <span className="txt1">상시진행</span>
      </a>
    </li>
    <li>
      <a href="#">
        <img src="img/list2.png" alt="lst1"/>
        <span className="im"><img src="img/stit_store.gif" alt="sit_store"/></span>
        <span className="txt">해피오더 딜리버리로 간편하게 주문하세요!</span>
        <span className="txt1">상시진행</span>
      </a>
    </li>
  </ul>
        <div id="roll2">
          <a href="#" className="active"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
</section>

<section id="list1">
  <h3>BR MENU</h3>
  <div className="ban">
      <img src="img/listgroup.png" alt="ban"/>
  </div>
</section>

<section id="store">
  <h3>BR STORE</h3>
    <img src="img/fban.jpg" alt="fban"/>
</section>   

<section id="deli">
  <h3>HAPPY ORDER & DELIVERY</h3>
    <img src="img/deli.jpg" alt="fban"/>
</section>

<section id="sns">
  <h3>SNS</h3>
  <ul>
    <li><a href="#"><img src="img/f.png" alt="f"/></a></li>
    <li><a href="#"><img src="img/t.png" alt="f"/></a></li>
    <li><a href="#"><img src="img/b.png" alt="f"/></a></li>
    <li><a href="#"><img src="img/u.png" alt="f"/></a></li>
    <li><a href="#"><img src="img/i.png" alt="f"/></a></li>
  </ul> 
</section> 

<h4 className="line">
  <a href="#"><img src="img/tt.png" alt="tt"/></a>
</h4>

<div id="listimg">
  <ul className="cf">
     <li><a href="#"><img src="img/ff.png" alt="flist"/></a></li>
     <li><a href="#"><img src="img/ff.png" alt="flist"/></a></li>
     <li><a href="#"><img src="img/ff.png" alt="flist"/></a></li>
     <li><a href="#"><img src="img/ff.png" alt="flist"/></a></li>
  </ul>
</div>   
      </>    
    )
}

function Footer(){
    
    return(
        <>
        <nav id="fmenu">
        <ul class="cf">
            <li><a href="#">채용문의</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">윤리신고센터</a></li>
            <li><a href="#" className="pr">개인정보처리방침</a></li>
            <li><a href="#">영상정보처리기기운영관리방침</a></li>
            <li><a href="#">거래희망회사 사전등록</a></li>
        </ul>
      </nav>
    
    <div className="foot">
      <ul className="cf">
        <li>
          <a href="#">
            <img className="fs" src="img/foot1.png" alt="ff1"/>
            <span>해피포인트</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img clclassNameass="fs" src="img/foot2_1.png" alt="ff1"/>
            <span>해피포인트</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="fs" src="img/foot3.png" alt="ff1"/>
            <span>해피포인트</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="fs" src="img/foot4.gif" alt="ff1"/>
            <span>해피포인트</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="fs" src="img/foot5_1.png" alt="ff1"/>
            <span>해피포인트</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="fs" src="img/foot6.gif" alt="ff1"/>
            <span>해피포인트</span>
          </a>
        </li>
      </ul>
    </div>
    
    <div className="customer">
      <p className="center"><a href="#">고객센터</a></p>
      <p className="tel"><a href="#">080-222-1234</a></p>
    </div>
    
    <div className="site">
      <button type="button">FAMILY SITE</button>
      <ul>
              <li><a href="#">aaaa</a></li>
              <li><a href="#">bbbb</a></li>
              <li><a href="#">cccc</a></li>
              <li><a href="#">ddddd</a></li>
              <li><a href="#">eeeee</a></li>
      </ul>
    </div>
    
    <div className="info">
      <div className="foot cf">
        <p className="info1">사업자 등록번호 : 000-00-00000</p>
        <p className="info2">주연코리아(주) 대표이사 김준수</p>
          <address>서울특별시 서초구 남부순환로 1234</address>	
        <p className="info3">개인정보관리책임자 : 이지현</p>   
      </div>
    </div>     
    </>       
    )
}



ReactDOM.render(
    <Compo/>,
    document.getElementById("root")
)