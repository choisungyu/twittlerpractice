/*
    1. li , div element 생성
    2. element 에 class 를 지정
    3. element에 값을 채워넣는
    4. li ele 에 div ele 붙이는 방법
*/

console.log('!!!')

// 미리 queryselector 를 통해서 아이디를 가져옴
let btnAddNewTweet = document.querySelector('#add-new-tweet');
let btnClearFilter = document.querySelector('#clear-filter');
let tweets = document.querySelector('#tweets')
let inputUser = document.querySelector('#input-user')

/*
    1.makeCommentElement => 댓글을 html 로 변환하는 과정
    2.printComment => 하나 댓글 출력
    3.printComments => 하나의 댓글 출력을 반복적으로 실행하는 것(여러댓글 출력)

*/

// 먼저 댓글 하나 출력하는 거
function renderTweet(tweetObj) { // tweetObj 에 객체 element 들어감
    // ul 안에 넣어줄  { li , div }(이름, 내용) 초기화 하기
    let li = document.createElement('li');
    let userDiv = document.createElement('div')
        // userDiv.classList.add('username') // 클래스 추가
    let msgDiv = document.createElement('div')


    userDiv.textContent = tweetObj.name;
    userDiv.className = 'user'; // 클래스 변경 과 클래스 추가 의 차이?

    msgDiv.textContent = tweetObj.msg;
    // msgDiv.className = 'msg'

    // userDiv.onclick
    li.appendChild(userDiv)
    li.appendChild(msgDiv)

    return li;

}


function renderTweets() {
    // data 에서 element 를 뽑아서 rendertweet 함수에 꽂음 => tweets도 append 해줌
    DATA.forEach(element => {
        let li = renderTweet(element);
        tweets.appendChild(li);
    });
}
renderTweet();
// renderTweets();