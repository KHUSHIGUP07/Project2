document.addEventListener('DOMContentLoaded', () => {
  const contentList = document.getElementById('content-list');

  // Dummy data
  const contentItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/100',
      status: 'Flagged'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/100',
      status: 'Flagged'
    }
  ];

  const stats = {
    total: contentItems.length,
    flagged: contentItems.length,
    approved: 0,
    rejected: 0
  };

  document.getElementById('total-uploads').textContent = stats.total;
  document.getElementById('flagged').textContent = stats.flagged;
  document.getElementById('approved').textContent = stats.approved;
  document.getElementById('rejected').textContent = stats.rejected;

  contentItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'content-card';

    const img = document.createElement('img');
    img.src = item.image;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const approveBtn = document.createElement('button');
    approveBtn.className = 'approve';
    approveBtn.textContent = 'Approve';
    approveBtn.onclick = () => {
      stats.approved++;
      stats.flagged--;
      updateStats();
      card.remove();
    };

    const rejectBtn = document.createElement('button');
    rejectBtn.className = 'reject';
    rejectBtn.textContent = 'Reject';
    rejectBtn.onclick = () => {
      stats.rejected++;
      stats.flagged--;
      updateStats();
      card.remove();
    };

    actions.appendChild(approveBtn);
    actions.appendChild(rejectBtn);

    card.appendChild(img);
    card.appendChild(actions);

    contentList.appendChild(card);
  });

  function updateStats() {
    document.getElementById('flagged').textContent = stats.flagged;
    document.getElementById('approved').textContent = stats.approved;
    document.getElementById('rejected').textContent = stats.rejected;
  }
});
