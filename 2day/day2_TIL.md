# CSS란
CSS (Cascading Style Sheets)는 웹페이지를 꾸미려고 작성하는 코드  
CSS는 HTML과 함께 웹을 구성하는 기본 프로그래밍 요소. HTML이 텍스트나 이미지, 표와 같은 구성 요소를 웹 문서에 넣어 뼈대를 만드는 것이라면 CSS는 색상이나 크기, 이미지 크기나 위치, 배치 방법 등 웹 문서의 디자인 요소를 담당

## CSS Selector
(참고 : https://www.w3schools.com/cssref/css_selectors.php)
### - 전체 선택자
CSS를 적용할 대상으로 HTML 문서 내부의 모든 요소를 선택  
```
    <style>  
        * { color: red; }  
    </style>  
```

### - HTML 요소 선택자
CSS를 적용할 대상으로 HTML 요소의 이름을 직접 사용하여 선택할 수 있음  
```
    <style>  
        h2 { color: teal; text-decoration: underline; }  
    </style>  
    ...  
    <h2>이 부분에 스타일을 적용합니다.</h2>  
```

### - 아이디(id) 선택자
아이디 선택자는 CSS를 적용할 대상으로 특정 요소를 선택할 때 사용  
이 선택자는 웹 페이지에 포함된 여러 요소 중에서 특정 아이디 이름을 가지는 요소만을 선택해 줌  
```
    <style>  
        #heading { color: sandybrown; text-decoration: line-through; }  
    </style>  
    ...  
    <h2 id="heading">이 부분에 스타일을 적용합니다.</h2>  
```


* HTML과 CSS에서는 하나의 웹 페이지에 속하는 여러 요소에 같은 아이디 이름을 사용해도 별 문제없이 동작합니다.
* 하지만 이렇게 중복된 아이디를 가지고 자바스크립트 작업을 하게 되면 오류가 발생합니다.
* 따라서 되도록이면 하나의 웹 페이지에 속하는 요소에는 다른 아이디 이름을 사용하거나 클래스를 사용하는 것이 좋습니다.


### - 클래스(class) 선택자
클래스 선택자는 특정 집단의 여러 요소를 한 번에 선택할 때 사용  
이러한 특정 집단을 클래스(class)라고 하며, 같은 클래스 이름을 가지는 요소들을 모두 선택해 줌  
```
    <style>  
        .headings { color: deepskyblue; text-decoration: overline; }  
    </style>  
    ...  
    <h2 class="headings">이 부분에 스타일을 적용합니다.</h2>  
    <p>클래스 선택자를 이용하여 스타일을 적용할 HTML 요소들을 한 번에 선택할 수 있습니다.</p>  
    <h3 class="headings">이 부분에도 같은 스타일을 적용합니다.</h3>  
```

### - 그룹 선택자
그룹 선택자는 위에서 언급한 여러 선택자를 같이 사용하고자 할 때 사용  
그룹 선택자는 여러 선택자를 쉼표(,)로 구분하여 연결  
이러한 그룹 선택자는 코드를 중복해서 작성하지 않도록 하여 코드를 간결하게 만들어 줘야 함  
```
    <style>  
        h2 { color: navy; }  
        h2, h3 { text-align: center; }  
        h2, h3, p { background-color: lightgray; }  
    </style>  
```


## CSS File Position
* style을 HTML페이지에 적용하는 3가지 방법  
- inline > internal > external 의 우선순위 순서로 적용  

### 1. inline
HTML태그 안에다가 적용  
다른 CSS파일에 적용한 것 보다 가장 먼저 적용  
인라인 스타일이란 html 요소 내부에 style 속성을 사용하여 CSS 스타일을 적용하는 방법  
이러한 인라인 스타일은 해당 요소에만 스타일을 적용할 수 있음  
```
    <p style="color:green; text-decoration:underline">  
    인라인 스타일을 이용하여 스타일을 적용  
    </p>  
```

### 2. internal
style 태그로 지정  
구조와 스타일이 섞이게 되므로 유지보수의 어려움  
별도의 CSS파일을 관리하지 않아도 되며 서버에 CSS파일을 부르기 위해 별도의 브라우저가 요청을 보낼 필요가 없음  
내부 스타일 시트를 이용한 방법은 HTML 문서의 <head>태그 내에 <style>태그를 사용하여 스타일을 지정  
이러한 내부 스타일 시트는 해당 HTML 문서에만 스타일을 적용할 수 있음  
```
    <style>  
    body { background-color: lightyellow; }  
    p { color: red; text-decoration: underline; }  
    </style>  
```

### 3. external
외부파일(.css)로 지정  
외부 스타일 시트를 이용한 방법은 웹 사이트 전체의 스타일을 하나의 파일에서 변경할 수 있도록 해줌  
스타일을 적용할 모든 웹 페이지의 <head>태그 내에 <link>태그를 사용하여 외부 스타일 시트를 포함하면 됨  


## Box Model
https://dinfree.com/assets/img/css4.png

### - margin
박스의 외부 영역으로 이웃하는 요소와의 간격. 마진은 눈에 보이지 않음
### - border
박스를 둘러 싼 테두리 영역
### - padding
테두리와 콘텐츠 사이의 간격. 패딩은 눈에 보이지 않음
### - contents
콘텐츠 영역으로 텍스트 및 이미지의 실제 영역


# 반응형 웹이란?
하나의 웹사이트에서 PC, 스마트폰, 태블릿 PC 등 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법  

재미있는 CSS(https://youtu.be/wuUSVEcK-kM)  

# Day2. CSS  
미션  
화면의 높이를 꽉 채우는 html, css 코드를 구현하세요.
- header, nav, article, aside, footer와 같은 시멘틱태그를 사용
- 글씨는 폭과 높이의 중간에 위치하도록 하세요.
- article, aside 태그는 section을 이용하여 묶어주세요.
- 각 요소에 색상을 넣고 테두리도 지정해보세요.
- 시멘틱 태그를 사용했을 때의 장점이 무엇인지 고민해보세요.


추가미션  
링크 (https://careers.kakaoenterprise.com/content/process/?locale=ko_KR)를 참고하여 html, css를 이용하여 해당 사이트를 따라 만들어보세요.
- 각각의 아이콘과 링크는 실제 페이지에서 정보를 가져오세요.
- background image를 넣는 방식에 대해 고민해보세요.
- 각각의 요소들에 마우스를 올렸을 때 나타나는 스타일에 대해서 확인해보세요.
- 영입 프로세스 아래의 [테크,디자인,서비스기획…] 버튼 부분은 동작하지 않아도 됩니다.
- (선택) 화면의 폭을 줄였을 때, 실제 사이트와 동일하게 레이아웃이 변하도록 만들어보세요.