document.querySelector(".f").addEventListener("submit", function (e) {
    e.preventDefault();

    const totalClasses = parseFloat(document.getElementById("total").value);
    const attendedClasses = parseFloat(document.getElementById("attended").value);
    const resultDiv = document.getElementById("result");

    if (
        isNaN(totalClasses) || isNaN(attendedClasses) ||
        totalClasses <= 0 || attendedClasses < 0 || attendedClasses > totalClasses
    ) {
        resultDiv.innerHTML = "Please enter valid numbers. Attended classes cannot exceed total classes.";
        return;
    }

    const attendancePercent = (attendedClasses / totalClasses) * 100;
    resultDiv.innerHTML = `Your current attendance is <strong>${attendancePercent.toFixed(2)}%</strong>.`;
});
