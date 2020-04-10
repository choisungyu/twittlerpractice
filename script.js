/*
    1. li , div element 생성
    2. element 에 class 를 지정
    3. element에 값을 채워넣는
    4. li ele 에 div ele 붙이는 방법
*/

console.log('!!!')

// 미리 queryselector 를 통해서 아이디를 가져옴
let btnAddNewTweet = document.querySelector('#add-new-tweet');
let btnAddRandomTweet = document.querySelector('#add-random-tweet')
let btnClearFilter = document.querySelector('#clear-filter');

let tweets = document.querySelector('#tweets')
let inputUser = document.querySelector('#input-user')
let inputContent = document.querySelector('#input-content')


/*
    1.makeCommentElement => 댓글을 html 로 변환하는 과정
    2.printComment => 하나 댓글 출력
    3.printComments => 하나의 댓글 출력을 반복적으로 실행하는 것(여러댓글 출력)

    1. 요소를 생성한다
    2. 그 요소에 텍스트를 가져오거나 변경한다(textContent)
    3. 클래스 특성 값을 가져오거나 변경한다(className)

*/

// 0. 뿌려주는 곳(단일)
function renderTweet(tweetObj) { // tweetObj 에 객체 element 들어감
    // ul 안에 넣어줄  { li , div }(이름, 내용) 초기화 하기
    let li = document.createElement('li');
    let userDiv = document.createElement('div')
        // userDiv.classList.add('username') // 클래스 추가
    let msgDiv = document.createElement('div')


    userDiv.textContent = tweetObj.name;

    // className 을 user 로 해서 객체에 user 로 접근할 때 이름이 조회됨 ?
    userDiv.className = 'user'; // 클래스 변경 과 클래스 추가 의 차이?


    msgDiv.textContent = tweetObj.msg;
    msgDiv.className = 'content'
        // msgDiv.className = 'msg'

    // userDiv.onclick
    li.appendChild(userDiv)
    li.appendChild(msgDiv)

    return li;

}

// 1. 뿌려주는 곳(여러개)
function renderTweets() {
    // data 에서 element 를 뽑아서 rendertweet 함수에 꽂음 => tweets도 append 해줌
    DATA.forEach(element => {
        let li = renderTweet(element);
        tweets.appendChild(li);
    });
}
// renderTweet();
renderTweets();

// 2. 새 글 추가하기 => function 만들고 => button 으로 연결할 것임
// 이름까지 넣어줄 것
function addNewTweet() {

    // 위에는 단지 element를 불러오기 위해서 선언함
    let inputUserValue = document.querySelector('#input-user').value;
    let inputContentValue = document.querySelector('#input-content').value

    // 객체를 만들고
    let newTweet = {};
    // 객체에 키 값으로 조회해서 값을 넣어준다
    newTweet.name = inputUserValue;
    newTweet.msg = inputContentValue
        // 기존의 DATA 객체에 새로 만든 newTweet객체를 담음
    DATA.push(newTweet);

    console.log(DATA);

    // 등록했으면 다시 뿌려줘야 함 ( 뿌려주는 함수에 -> 새 객체를 담음 -> 그 객체가 renderTweet함수에 의해 redering될 것임)
    let newTweetElement = renderTweet(newTweet);
    tweets.appendChild(newTweetElement);
}

function randomNewTweet() {
    // 함수 자체가 return 으로 객체가 반환 되므로
    let randomUserValue = generateNewTweet().user
    let randomContentvalue = generateNewTweet().message
    console.log(randomUserValue + "," + randomContentvalue)

    // addNewTweet 에서 한 것 처럼 , randomValue 들도 newTweet 에 담는다
    let randomNewTweet = {};
    randomNewTweet.name = randomUserValue;
    randomNewTweet.msg = randomContentvalue;

    // DATA에 추가하고
    DATA.push(randomNewTweet)

    // 렌더링 하는데에 다시 뿌려줘야 함
    let randomNewTweetElement = renderTweet(randomNewTweet);
    tweets.appendChild(randomNewTweetElement);
}

function clearfilter() {
    tweets.innerHTML = '';
    renderTweets();
}
// 
btnAddNewTweet.onclick = addNewTweet;
btnClearFilter.onclick = clearfilter;
btnAddRandomTweet.onclick = randomNewTweet;