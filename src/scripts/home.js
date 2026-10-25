const controls = [...document.querySelectorAll('[data-decision]')];
const reset = document.querySelector('[data-reset]');
const status = document.querySelector('[data-status]');
const outcome = document.querySelector('[data-outcome]');
const evidence = document.querySelector('[data-evidence]');

const states = {
  pending: {
    label: 'Needs approval',
    statusClass: 'status--pending',
    outcome: 'Waiting for a human decision. Nothing has been released.',
    evidence: false,
  },
  approved: {
    label: 'Approved',
    statusClass: 'status--approved',
    outcome: 'Example: CFO and COO approvals are terminal. The action is released to the deterministic action plane.',
    evidence: true,
  },
  rejected: {
    label: 'Not approved',
    statusClass: 'status--rejected',
    outcome: 'Example: the request is rejected. The action is not released to the deterministic action plane.',
    evidence: false,
  },
};

function setState(next) {
  const value = states[next];
  if (!value || !status || !outcome || !evidence) return;

  status.textContent = value.label;
  status.className = `status ${value.statusClass}`;
  outcome.textContent = value.outcome;
  evidence.hidden = !value.evidence;
  if (reset) reset.hidden = next === 'pending';
  controls.forEach((control) => {
    control.setAttribute('aria-pressed', String(control.dataset.decision === next));
  });
}

controls.forEach((control) => {
  control.setAttribute('aria-pressed', 'false');
  control.addEventListener('click', () => setState(control.dataset.decision));
});

reset?.addEventListener('click', () => {
  setState('pending');
  controls[0]?.focus();
});
