document.addEventListener('DOMContentLoaded', function () {
    setGreeting('greetingStore1', 'Salutations, welcome to Giddy Grocer!! How can I help?');
    setGreeting('greetingStore2', 'Salutations, welcome to Barney's! How can I help?');
});

function setGreeting(elementId, greeting) {
    const greetingElement = document.getElementById(elementId);
    greetingElement.textContent = greeting;
}
