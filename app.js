const correct_ans = ['A','A','B','A'];
const form = document.querySelector('.quiz-form');
const score = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    scrollTo(0,0);
    const answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    let output = 0;
    answers.forEach((ans,index)=>{
        if(ans === correct_ans[index]){
          output+=25;
        }

    })
    score.classList.remove('d-none');

    let i=0;
    const timer= setInterval(()=>{
        score.querySelector('span').textContent= `${i}%`;
        if(i === output){
            clearInterval(timer);
        }else{
            i++;
        }
    },100);
})

