// Live Chat Widget - Mock Data
document.addEventListener('DOMContentLoaded', function() {
  const chatHTML = `
    <div id="chat-widget" class="chat-widget">
      <div class="chat-bubble" id="chat-trigger">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <div class="chat-window" id="chat-window">
        <div class="chat-header">
          <h3>Chat with us</h3>
          <button class="chat-close" id="chat-close">×</button>
        </div>
        <div class="chat-messages" id="chat-messages">
          <div class="message bot-message">
            <p>Hi! 👋 How can we help you today?</p>
          </div>
        </div>
        <div class="chat-input-area">
          <input type="text" id="chat-input" placeholder="Type your message..." class="chat-input">
          <button class="chat-send" id="chat-send">Send</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', chatHTML);

  const chatTrigger = document.getElementById('chat-trigger');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  const mockResponses = [
    "That's a great question! Let me help you.",
    "Sure! I'd be happy to assist with that.",
    "We can definitely help you with that. Let me check.",
    "Thanks for asking! Here's what I found...",
    "I'm here to help! Let me gather more info.",
    "Absolutely! That's one of our popular features.",
    "Perfect! I can help you get started.",
    "Great choice! Our team loves this one."
  ];

  // Toggle chat window
  chatTrigger.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
    if (chatWindow.classList.contains('active')) {
      chatInput.focus();
    }
  });

  chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('active');
  });

  // Send message
  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user-message';
    userMsg.innerHTML = `<p>${escapeHtml(message)}</p>`;
    chatMessages.appendChild(userMsg);

    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'message bot-message';
      const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      botMsg.innerHTML = `<p>${response}</p>`;
      chatMessages.appendChild(botMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});
