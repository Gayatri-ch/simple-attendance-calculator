document.querySelector(".f").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const total = parseFloat(document.getElementById("total").value);
    const conducted = parseFloat(document.getElementById("conducted").value);
    const current = parseFloat(document.getElementById("current").value);
    const target = parseFloat(document.getElementById("target").value);
    const resultDiv = document.getElementById("result");
  
    // Basic validation
    if (
      isNaN(total) || isNaN(conducted) || isNaN(current) || isNaN(target) ||
      total <= 0 || conducted <= 0 || conducted > total ||
      current < 0 || current > 100 || target < 0 || target > 100
    ) {
      resultDiv.innerHTML = "Please enter valid values. Make sure conducted ≤ total, and percentages are between 0-100.";
      return;
    }
  
    const attended = (current / 100) * conducted;
    const remaining = total - conducted;
  
    // Total classes required to meet target
    const totalRequiredAttendance = (target / 100) * total;
  
    const requiredFutureAttendance = Math.ceil(totalRequiredAttendance - attended);
  
    if (requiredFutureAttendance > remaining) {
      resultDiv.innerHTML = `It's not possible to reach ${target}% attendance. You can only attend ${remaining} more class${remaining !== 1 ? 'es' : ''}, but need to attend at least ${requiredFutureAttendance}.`;
    } else {
      resultDiv.innerHTML = `You need to attend at least <strong>${requiredFutureAttendance}</strong> of the remaining <strong>${remaining}</strong> classes to reach <strong>${target}%</strong> attendance.`;
    }
  });
  