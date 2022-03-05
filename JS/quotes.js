const quotes = [
    {
        quote: "나를 죽이지 못하는 고통은 나를 더 강하게 만든다.",
        author: "- 프리드리히 니체 -",
    }, 
    {
        quote: "기회는 노크하지 않는다. 그것은 당신이 문을 밀어 넘어뜨릴 때 모습을 드러낸다.",
        author: "- 카일 챈들러 -",
    },
    {
        quote: "한 번도 실수한 적이 없는 사람은 한 번도 새로운 것에 도전해 본 적이 없는 사람이다.", 
        author: "- 알버트 아인슈타인 -",
    },
    {
        quote: "얻은 것은 이미 끝난 것이다. 기쁨의 본질은 그 과정에 있으므로.",
        author: "- 윌리엄 셰익스피어 -", 
    },
    {
        quote: "경험은 배울 줄 아는 사람만 가르친다.", 
        author: "- 올더스 헉슬리 -",
    },
    {
        quote: "언젠가 나의 시대가 올꺼야. 나는 기다릴 수 있어.",
        author: "- 헤르베르트 폰 카라얀 -",
    },
    {
        quote: "중요한 것이라고 해서 모두 측정할 수 있는 것은 아니며, 측정할 수 있는 것이라 해서 모두 중요한 것은 아니다.",
        author: "- 엘리엇 아이스너 -",
    },
    {
        quote: "인생에서 가장 슬픈 세 가지 \"할 수 있었는데, 해야만 했는데, 하고 싶었는데,\"",
        author: "- 루이스 분 -",
    },
    {
        quote: "시련이 있을 뿐 실패는 없다.",
        author: "- 정주영 -",
    },
    {
        quote: "세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.",
        author: "- 스티브 잡스 -",
    },
    {
        quote: "Stay Hungry, Stay Foolish.",
        author: "- 스티브 잡스 -",
    },
    {
        quote: "나의 발자국을 세상에 남길 것이다.",
        author: "- 스티브 잡스 -",
    },
    {
        quote: "시간이 없다. 누군가를 위해 당신의 삶을 버리지 마라.",
        author: "- 스티브 잡스 -",
    },
    {
        quote: "나는 폭풍이 두렵지 않다. 나의 배로 항해하는 법을 알고 있으니까.",
        author: "- 헬렌 켈러 -",
    },
    {
        quote: "최선을 다하고 나머지는 잊어라",
        author: "- 윌터 앨스톤 -",
    },
    {
        quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 줄 수 없다.",
        author: "- 캐럴 버넷 -",
    },
    {
        quote: "실패란 넘어지는 것이 아니라 넘어진 자리에 머무는 것이다.",
        author: "-",
    },
    {
        quote: "시작할 때 위대할 필요는 없다. 그러나 시작하면 위대해진다.",
        author: "- 지그 지글러 -",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해.",
        author: "- 찰리 채플린 -",
    },
    {
        quote: "까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더 많이 실험할수록 더 나아진다",
        author: "- 랄프 왈도 에머슨 -",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author: "- 앙드레 말로 -",
    },
    {
        quote: "이룰 수 없는 꿈을 꾸고 이길 수 없는 적과 싸우며, 이룰 수 없는 사랑을 하고 견딜 수 없는 고통을 견디고, 잡을수 없는 저 하늘의 별도 잡자.",
        author: "- 미켈 데 세르반데스 -",
    },
]; 

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;