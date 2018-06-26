
# Transaction Travel Visualizer

About
-----
[Live prototype](http://sweves.github.io/transaction-travel-visualizer/)

This is a prototype was used to pitch one of the world's largest card payment organizations to take foreign credit card transaction data and reinterpret it to find patterns in how people travel.

This prototype is made for desktop using mock data and [D3.js](https://d3js.org/)

This prototype uses only 2 data points: the country of origin the credit/ debit card was issued and the country the transaction took place. With this data we can map where people are from and where they tend to travel. 

![screenshot of visualizer](https://lh3.googleusercontent.com/vStxz3dHFsm45RCfK4bHJBi_9WwtvbAxc7TvmILKbqIrzCAx391uyVkx6l5gPACOW6z2qzBSz7xN4gR3tINFi-zKkF80R81v-l6ROcYgE4NU2ZWjYX6afCQi2cnxVL1k1rGfXBNpQ466Dgx_57msRTdD47lezkgiBZf2cJ2WrDosMAa6nc2Pq07tpWaXLk5dol7aNzlyK4UEMYW1Ujpvg85XeQCBsI_DruRMcwAiedsQw7K_roT2O-1w3TNUGJBKXdQBMQ2d6uQtgNR8d52yiCCOTcC54EPJ5bZdsu8vlH0M31MMighY4Hwu2gz76pl4AdzFjgD4g9GGxsQNmhAbnLB1yEkAhvsdNwjvJ4qTDXRW033BDh4a84OGbLy1InAKtxiPONcj9zQQnxqFxPAzcjJolXl9iCrt4nyqOLJn2OllOuRUDpk89FkMEAhG-6nFenk6BrU_0ngkgj_aFxQ4dIQXsaXs7T-KhZFf5nX0lDBD2ApGYzZyBymswmYb2RNfSMuaXW8suuu_Hg4tizxoJ7QTARMS5VtqN5zUcLHZUz9sdVRUaApRaVeCn88BIM0I8XiK-bWmA1-qkIlzUxCt5BRgDg5WIPs3W2oMU6ZZ7f74QVpvESKRirGXrj7p7OKHuOgxrGEkCI5WNoQ6FkBbHBSLdc42ITPPYQ=w971-h550-no)

By hovering over these data points we can visualize the percentage each country makes up of total travelers to the destination country.

![incoming transactions](https://lh3.googleusercontent.com/npA5ClihFJmYgRDbg9MwMTCiQVSkcRV3F_1MNF53pMNECgxB8IUYACuDQ1NI4koQ8IXKbReCn7--MX3eycolbDtKNYu88Uhc7heL14e0CZ_7V-0WErbKnp-1CrPNJnnxSyq8MwBRTEMg3j6Ons3ymW6T4AZtcdCXLIWzagk7OXjRk3EUqfuDJ3y1pXGdmxqhzJhI006_Dsyj334sTQhGlr1OCJQBelIDX5vWUMqrq44g4aV6Ih1WGOakV1kBMLOsul-_rcjl_DtWdT-xCy9P9ihdgsuEiSO093_0OkVyae7-yYYjniqx0DdGRCjw5wkeOQ7S2rF-CeAOP7uqYIwocnYbWEDJqC-hM4S48esRTP86xfhwpXFGzpV8Y8xMnLo0-E2FDoI5xWsfSXC6AuUfcbBisuQ3KLaSx4uouGE9yMkQVZWokJBwPpjqTmszkGTPH_5_JhhbJe8Trh7yR_9Laiz7Cj24M2C3_HXXeOZg0rDqTgddidcq-iyl_9yA9bmsFhKa_ZJMIXxvHhgWHNKDOdEX6BDL3vQXpKl1Wu9ANTtYrrefm9AmFLXCmKjXVZhcorfLIjFsNFvieXCug1TTDnVOmTY9hqPwQp7Faza0FQuJmn_LHkzxngo9z8k-MGwwFKvAyNWXLHoXuARPmYAKBA2H_EHhSgVaZg=w971-h547-no)

By toggling to outgoing transactions we can also learn where travelers from the country of origin tend to travel the most.

![outgoing transactions](https://lh3.googleusercontent.com/ReE3fCEulOhMB4zRgvR1VzXKxcvXxcMF6IieY3V2Ked83q0D6hVNZfhKrLSNQSDTdP-W1F0rMVdMm2dbDCtxxkWBala9Y-Cy5b-JSy3f6SI3pXng5yKiz1VhUTWhbP61QQO4W3L9Mf-nj59VIY_abxah7ui1ko_0sf3A_SGUgo7C8xizC8Z_mztzEHiXlFGBTDHn4widFSSdlp4_XUmiVO2aQTjdT2hfvwJ8M2W87YQNPkyz4Aq7Qvn3zKaXSez2PLYoVvfuAVV66gKtIFBG3MSk22-kXBIe_itK0CsRTguostinHhHFV5qmatApA7hFjUbWYn65OgduxG6YpIpl35ZEBFdmsawtqASKMypRLiaGbbKmcJDD2ZbtMwM_6sQfgGV0MLyi-ybYKccNNLkh34bk6_hw5b_cYL6zA4OJ8AU7eZM7R5idUivQ75dSwtbTuKgx8U27eKpqieIanKMMExd3HA_87g3NePFa0raMfHohRibj4c3deLlyvg8lqhmcOocRkwEp6OFOfvZmCdU5o_8CrPt3rvHv9gbbNJtRB1k0m7PtnvzLae62PrWD79ATdBn8MvLM7GNEubBvkCNN0l_vEglBxcJQ_HRk6WfAS5sbmPojS0LxjtMF2f1KvYdehj_PxTQxBxqYKGBx4V2GTCzQHmQZWhwfRw=w972-h543-no)

What I would like to learn from visualizing this data is if countries that are closer in proximity (UK...Asia...etc.) tend to travel internationally more than US citizens ( only 36% of which  own a passport ) or if because the US is more isolated that US citizens tend to travel further. 


Usage
-----

First, install NodeJS if you haven't already.

    open https://nodejs.org/

or

    brew install nodejs

Then, in the same directory as this file,

    npm install http-server -g
    http-server .

to start an HTTP server in the current directory.