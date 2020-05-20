import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './header/Navigation.js';
import Footer from './footer/FooterComponent.js';
import Domov from './Sections/Domov.js'
import Muzi from './Sections/Muzi.js'
import Zeny from './Sections/Zeny.js'
import Doplnky from './Sections/Doplnky.js'
import Kosik from './Sections/KosikSuhrn.js'
import ShoppingList from './shoppingList/ShopingList.js'
import Module from './module/Module.js'

export class App extends Component {
  state = {
    items: [
      {
        id: 1,
        img: "../shopItems/tricko.jpeg",
        name: "Tricko Biele POWER",
        gender: "muz",
        cena: 15,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 2,
        img: "../shopItems/siltovka.jpeg",
        name: "Siltovka",
        gender: "muz",
        cena: 10,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 3,
        img: "../shopItems/nohavice.jpeg",
        name: "Nohavice",
        gender: "muz",
        cena: 25,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 4,
        img: "../shopItems/tricko.jpeg",
        name: "Tricko Biele POWER",
        gender: "zena",
        cena: 15,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 5,
        img: "../shopItems/siltovka.jpeg",
        name: "Siltovka",
        gender: "zena",
        cena: 10,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 6,
        img: "../shopItems/nohavice.jpeg",
        name: "Nohavice",
        gender: "zena",
        cena: 25,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 7,
        img: "../shopItems/tricko.jpeg",
        name: "Tricko Biele POWER",
        gender: 'zena',
        cena: 15,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 8,
        img: "../shopItems/siltovka.jpeg",
        name: "Siltovka",
        gender: 'zena',
        cena: 10,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 9,
        img: "../shopItems/nohavice.jpeg",
        name: "Nohavice",
        gender: 'zena',
        cena: 25,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 10,
        img: "../shopItems/tricko.jpeg",
        name: "Tricko Biele POWER",
        gender: 'muz',
        cena: 15,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 11,
        img: "../shopItems/siltovka.jpeg",
        name: "Siltovka",
        gender: 'muz',
        cena: 10,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 12,
        img: "../shopItems/nohavice.jpeg",
        name: "Nohavice",
        gender: 'muz',
        cena: 25,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 13,
        img: "../shopItems/tricko.jpeg",
        name: "Tricko Biele POWER",
        gender: 'zena',
        cena: 25,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 14,
        img: "../shopItems/siltovka.jpeg",
        name: "Siltovka",
        gender: 'zena',
        cena: 25,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 15,
        img: "../shopItems/nohavice.jpeg",
        name: "Nohavice",
        gender: 'muz',
        cena: 25,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 16,
        img: "../shopItems/tricko.jpeg",
        name: "Tricko Biele POWER",
        gender: 'zena',
        cena: 25,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      },
      {
        id: 17,
        img: "../shopItems/siltovka.jpeg",
        name: "Siltovka",
        gender: 'zena',
        cena: 25,
        dostupne: 5,
        popis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse beatae, autem veritatis molestias aperiam impedit in ab magnam quidem odit, culpa quae fugit sed laudantium. Ipsa nostrum sequi nihil doloribus minima eligendi est incidunt doloremque in, eum omnis libero nulla architecto illo laudantium porro? Eaque illo reprehenderit magnam similique quibusdam nesciunt, a cum laudantium eveniet quis molestias quidem sed commodi, eligendi odit praesentium, aliquid amet excepturi accusantium quasi? Beatae cum velit tenetur ipsam dolore quo optio voluptates, dolores sit architecto rem sunt tempore repellendus et, repellat quibusdam quia autem exercitationem amet ipsum asperiores commodi inventore earum harum. Quis dicta possimus cupiditate qui rem iure maiores provident ut debitis iste mollitia, nulla illo placeat sed accusamus, similique aspernatur alias id aliquid vero at! Vel facere quia doloribus numquam id! Earum explicabo repellendus architecto. Iusto saepe facere quae dolorem, deserunt est delectus hic, labore, amet facilis quibusdam ab illo dolor. Non deleniti atque odit facilis eveniet laudantium ea odio impedit esse ut corporis, nam hic doloribus consequatur accusantium alias beatae? Ducimus aut vitae officiis, dolorum molestiae omnis harum repellendus distinctio nihil, rerum tenetur perferendis ipsam iste nostrum eaque dignissimos sed odio praesentium dicta libero perspiciatis architecto. Similique aliquam beatae commodi recusandae?"
      }
    ],
    cenaSpolu: 0,
    pocetProduktov: 0,
    priceFilter: 100,
    show: false,
    order: "",
    module: false,
    moduleId: 0,
    shopBasket: [
      
    ],
    pocetPredmetov: 0
  }


  //---------------------FUNCTIONS
  pricefilter = (e) => {
    this.setState({ 
      priceFilter: e.target.value
    })
  }
  //zobrazenie nakupneho listu
  showShopingList = () => {
    let data = this.state.show;
    let updateShow = !data;
    this.setState( {
      show: updateShow
    })
  }
  //schovanie nakupneho listu
 hide = () => {
  this.setState( {
    show: false
  })
}
//Zotriedenie produktov
sortProduct = (pohlavie) => {
let pole = [...this.gender(pohlavie)]
if(this.state.order === "asc"){
  pole.sort( (a, b) => {
    return a.cena - b.cena
 })
}
else if(this.state.order === "desc"){
  pole.sort( (a, b) => {
    return b.cena - a.cena
 })
}
else{

}
return pole;
}
//Zistenie pohlavia na nacitanie spravnych produktov
gender = (pohlavie) => {
  let array = [];
  this.state.items.map( data => {
    if(data.gender === pohlavie){
      array.push(data)
    }
  })
  return array;
}
//ZORADENIE PRODUKTOV (asc, desc)
orderProductsHandler = (e) => {
  this.setState({order: e.target.value})
}
//Ziskanie ID na vytvorenie modulu
getId = (e) => {
this.setState({moduleId: e})
}

//Module manipulation
showModule = () =>{
  this.setState({module: true})
}
hideModule = () => {
  this.setState({module: false})
}
//nakupenie tovaru
buyItemHandler = (e) => {
  let updated = [...this.state.items]
  let array = updated.findIndex(item => item.id === Number(e.target.id));
  let basket = [...this.state.shopBasket];
  let itemyVKosiku = this.state.pocetPredmetov;
  if(updated[array].dostupne === 0){
  }
  else{
    updated.map( item => {
      if(item.id === Number(e.target.id)){
         this.setState({shopBasket: [item,...basket], 
                        pocetPredmetov: itemyVKosiku + 1,
                        items: updated});
                        updated[array].dostupne -= 1;
      }
    }
  )
  }
 }
deteteItemHandler = (e) => {
  let basket = [...this.state.shopBasket];
  let copyOfState = [...this.state.items] ;
  let array = basket.findIndex(item => item.id === Number(e.target.id));
  let array2 = copyOfState.findIndex(item => item.id === Number(e.target.id));
  console.log(array2)
  basket.splice(array, 1);
  let predmetyPocet = this.state.pocetPredmetov;
  copyOfState[array2].dostupne = copyOfState[array2].dostupne +1;
  this.setState({items: copyOfState, shopBasket: basket, pocetPredmetov: predmetyPocet - 1});
}



  render() {
    return (
      <div className="App" onClick={this.sortData}>
        {this.state.module ? <Module
         hide={this.hide}
         buyItemHandler={this.buyItemHandler}
         moduleData={this.showModule}
         hideModule={this.hideModule}
         data={this.state.items} 
         loadId={this.state.moduleId}/> : null}
        <Router>
          <Nav show={this.showShopingList}
          hideModule={this.hideModule} 
          pocetPredmetov={this.state.pocetPredmetov}/>
            <ShoppingList 
            items={this.state.shopBasket}
            deleteItem={this.deteteItemHandler}
            show={this.state.show} 
            hide={this.hide}
            moduleData={this.showModule}
            getId={this.getId} />
            <Switch>
              <Route exact path="/">
                <Domov hide={this.hide} />
              </Route>
              <Route path="/Muzi">
                <Muzi getId={this.getId} 
                module={this.showModule} 
                zoradenie={this.orderProductsHandler} 
                info={this.sortProduct("muz")} 
                priceFilterValue={this.state.priceFilter} 
                priceFilter={this.pricefilter} hide={this.hide}/>
              </Route>
              <Route path="/NakupnýKošík">
                <Kosik 
                items={this.state.shopBasket}
                deleteItem={this.deteteItemHandler}
                show={this.state.show} 
                hide={this.hide}
                moduleData={this.showModule}
                getId={this.getId} />
              </Route>
              <Route path="/Zeny">
                <Zeny getId={this.getId}
                module={this.showModule} 
                zoradenie={this.orderProductsHandler} 
                info={this.sortProduct("zena")} 
                priceFilterValue={this.state.priceFilter} 
                priceFilter={this.pricefilter} 
                hide={this.hide}/>
              </Route>
              <Route path="/Doplnky">
                <Doplnky module={this.showModule} 
                zoradenie={this.orderProductsHandler} 
                info={this.sortProduct()} 
                priceFilterValue={this.state.priceFilter} 
                priceFilter={this.pricefilter}  
                hide={this.hide}/>
              </Route>
            </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
