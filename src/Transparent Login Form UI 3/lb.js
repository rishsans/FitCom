

console.clear();

const team = [
	{
		rank: 1,
		name: "Drishti",
		handle: "nature",
		img:
			"https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1255/2020/05/18091119/avatar.jpg",
		kudos: 36,
        sent:31
	},
	{
		rank: 2,
		name: "Prerna",
		handle: "prerna-rn",
		img:
			"https://mybluerobot.com/wp-content/plugins/svg-avatars-generator/data/custom-img/girl.png",
		kudos: 31,
        sent: 21
	},
	{
		rank: 3,
		name: "Harshita",
		handle: "harshita.bfly",
		img:
			"https://i.pinimg.com/736x/9c/4d/13/9c4d1303efe6db50ac3dc9910603ebde--create-your-own-avatar-avatar-maker.jpg",
		kudos: 24,
		sent: 7
	},
	{
		rank: 4,
		name: "Reyansh",
		handle: "rey_sh",
		img:
			"https://i.pinimg.com/originals/80/d7/1a/80d71a25179cebb8ca753635fc32bb6c.png",
		kudos: 22,
		sent: 4
	},
	{
		rank: 5,
		name: "Kiara",
		handle: "kia_aaa",
		img:
			"https://i.pinimg.com/originals/95/68/7d/95687d04ab85e3efd2b77219b4110ed9.png",
		kudos: 18,
		sent: 16
	},
	{
		rank: 6,
		name: "Jay",
		handle: "flowers",
		img:
			"https://mybluerobot.com/wp-content/plugins/svg-avatars-generator/data/custom-img/girl.png",
		kudos: 16,
		sent: 6
	},
	{
		rank: 7,
		name: "Rakesh",
		handle: "nasa",
		img:
			"https://i.pinimg.com/736x/d1/e3/80/d1e3809571f113d6e8afa159999c2fce--create-a-cartoon-avatar.jpg",
		kudos: 10,
		sent: 21
	},
	{
		rank: 8,
		name: "Kirti",
		handle: "kirtisinha28",
		img:
			"https://i.pinimg.com/736x/d6/6d/e1/d66de16f6eb4ed6269859159698852b3--avatar-maker-create-a-cartoon.jpg",
		kudos: 7,
		sent: 46
	},
	{
		rank: 9,
		name: "",
		handle: "stsra",
		img:
			"https://i.pinimg.com/originals/1f/6e/23/1f6e23d9e4a27cad4239d8feb45e38f2.png",
		kudos: 4,
		sent: 2
	},
	{
		rank: 10,
		name: "Kiara",
		handle: "flowers",
		img:
			"https://dreambuilders.dk/wp-content/uploads/2015/03/myAvatar-7.png",
		kudos: 1,
		sent: 24
	}
];

const randomEmoji = () => {
	const emojis = ["  🚶🏻", " 🚴🏻‍♂️", " 🚌"];
	let randomNumber = Math.floor(Math.random() * emojis.length);
	return emojis[randomNumber];
};

team.forEach((member) => {
	let newRow = document.createElement("li");
	newRow.classList = "c-list__item";
	newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" href="https://instagram.com/${member.handle
		}" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong>${randomEmoji()}
				</div>
			</div>
		</div>
	`;
	if (member.rank === 1) {
		newRow.querySelector(".c-place").classList.add("u-text--dark");
		newRow.querySelector(".c-place").classList.add("u-bg--yellow");
		newRow.querySelector(".c-kudos").classList.add("u-text--yellow");
	} else if (member.rank === 2) {
		newRow.querySelector(".c-place").classList.add("u-text--dark");
		newRow.querySelector(".c-place").classList.add("u-bg--teal");
		newRow.querySelector(".c-kudos").classList.add("u-text--teal");
	} else if (member.rank === 3) {
		newRow.querySelector(".c-place").classList.add("u-text--dark");
		newRow.querySelector(".c-place").classList.add("u-bg--orange");
		newRow.querySelector(".c-kudos").classList.add("u-text--orange");
	}
	list.appendChild(newRow);
});

// Find Winner from sent kudos by sorting the drivers in the team array
let sortedTeam = team.sort((a, b) => b.sent - a.sent);
let winner = sortedTeam[0];

// Render winner card
const winnerCard = document.getElementById("winner");
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16">Carbon Warrior of Last Week</div>
	<img class="c-avatar c-avatar--lg" src="${winner.img}"/>
	<h3 class="u-mt--16">${winner.name}</h3>
	<span class="u-text--teal u-text--small">${winner.handle}</span>
`;
