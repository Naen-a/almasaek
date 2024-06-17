const labels = [
"Январь",
"Февраль",
"Март",
"Апрель",
"Май",
"Июнь",
"Июль",
"Август",
"Сентябрь",
"Октябрь",
"Ноябрь",
"Декабрь",
];

const subjects = [
{
name: "Деректер базасы",
},
{
name: "Алгоритм негіздері",
},

{ name: "Микросхема" },

{ name: "ООП" },
];

let dataSet = {
labels,
datasets: [
{
label: subjects[0]?.name,
data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
borderColor: "rgb(255, 99, 132)",
backgroundColor: "rgba(255, 99, 132, 0.5)",
},
{
label: subjects[1]?.name,
data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
borderColor: "rgb(53, 162, 235)",
backgroundColor: "rgba(53, 162, 235, 0.5)",
},
{
label: subjects[2]?.name,
data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
borderColor: "rgb(75, 192, 192)",
backgroundColor: "rgba(75, 192, 192, 0.5)",
},
{
label: subjects[3]?.name,
data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
borderColor: "rgb(128, 0, 128)",
backgroundColor: "rgba(128, 0, 128, 0.5)",
},
],
};

const data = [
{
"id": "0brzsNZBDIT6mRnWyONP",
"grade": 50,
"date": "2024-06-15T17:39:55.256Z",
"iin": "050715601907",
"subject": "Деректер базасы"
},
{
"id": "6CJ6M60CVPCa540Wp1xc",
"grade": "85",
"subject": "Алгоритм негіздері",
"iin": "050715601907",
"date": "2024-06-05T17:39:41.000Z"
},
{
"id": "723lANPBWSBeDML81974",
"iin": "050715601907",
"grade": "85",
"date": "2024-05-24T17:01:01.000Z",
"subject": "ООП"
},
{
"id": "7DMehIkiI64A8A6R5kkE",
"subject": "Деректер базасы",
"date": "2024-06-15T17:39:55.256Z",
"grade": 50,
"iin": "050715601907"
},
{
"id": "8OzsGwDo7aK5G2U56vmA",
"subject": "Деректер базасы",
"grade": 50,
"iin": "050715601907",
"date": "2024-06-15T17:39:55.256Z"
},
{
"id": "8cQyQWjkiW9ZLPBW2iXE",
"subject": "Деректер базасы",
"grade": 50,
"iin": "050715601907",
"date": "2024-06-15T17:39:55.256Z"
},
{
"id": "G5GAx6DIHOgzhy5d35Bc",
"subject": "Алгоритм негіздері",
"grade": "85",
"date": "2024-06-05T17:39:41.000Z",
"iin": "050715601907"
},
{
"id": "HTAUjGciQqLzLfjsGR7O",
"iin": "050715601907",
"date": "2024-05-22T17:01:15.000Z",
"grade": "66",
"subject": "Деректер базасы"
},
{
"id": "M1xFqIvQLb9S8oBlTgCf",
"date": "2024-05-16T16:59:53.000Z",
"grade": "88",
"iin": "050715601907",
"subject": "Деректер базасы"
},
{
"id": "M5I9dAiQKJNlVYtsAkxQ",
"iin": "050715601907",
"subject": "Деректер базасы",
"grade": "69",
"date": "2024-06-12T17:39:08.000Z"
},
{
"id": "aLQ5DWOI20BpaQWWTk4O",
"grade": "89",
"iin": "050715601907",
"date": "2024-06-12T17:39:24.000Z",
"subject": "ООП"
},
{
"id": "i67yLtTVbZ14dCHzT5PO",
"grade": "90",
"subject": "Микросхема",
"date": "2024-05-10T17:00:47.000Z",
"iin": "050715601907"
},
{
"id": "osIHosagkhV3JA0gS9uB",
"subject": "Алгоритм негіздері",
"date": "2024-04-28T17:00:30.000Z",
"grade": "65",
"iin": "050715601907"
},
{
"id": "zV9R0qS0oSpK5uY5iZfY",
"date": "2024-06-15T17:39:55.256Z",
"grade": 50,
"subject": "Деректер базасы",
"iin": "050715601907"
}
]

У меня есть эти данные мне нужно чтобы ты расспарсил переменную data и добавил данные в dataset, в dataset мясяцы это dataset.datasets.data [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] мясяцы по индексу тоесть нулевой индекс это Январь первый индекс Февраль
