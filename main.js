const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // When user clicks any question:
        
        // 1. Toggle current item
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        answer.classList.toggle('active');
        
        // 2. Close siblings
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== this && otherQuestion.classList.contains('active')) {
                otherQuestion.classList.remove('active');
                otherQuestion.nextElementSibling.classList.remove('active');
            }
        });
    });
});