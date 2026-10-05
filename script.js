const CF_HANDLE = "Quoc_Binhhh";

async function loadCodeforces() {
    try {
        const response = await fetch(
            `https://codeforces.com/api/user.info?handles=${CF_HANDLE}`
        );

        const data = await response.json();

        if (data.status !== "OK") {
            throw new Error("Codeforces API error");
        }

        const user = data.result[0];

        const rankElement = document.getElementById("cf-rank");

        rankElement.textContent = user.rank;

        rankElement.className = "platform-rank rank";

        const rankClass = user.rank
            .toLowerCase()
            .replaceAll(" ", "-");

        rankElement.classList.add(rankClass);

        document.getElementById("cf-rating").textContent = user.rating;

        document.getElementById("cf-max-rating").textContent = user.maxRating;

    } catch (error) {
        console.error(error);

        document.getElementById("cf-rank").textContent = "Unavailable";

        document.getElementById("cf-rating").textContent = "-";

        document.getElementById("cf-max-rating").textContent = "-";
    }
}

loadCodeforces();

