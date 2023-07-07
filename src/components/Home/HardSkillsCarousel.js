import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './carouselstyle.css'

import {
  Card,
  CardMedia,
  Typography,
  Grid
} from '@mui/material'

const HardSkillsCarousel = () => {
  return (
    <div style={{ marginTop: '50px', color: '#494949', padding: '0px' }}>
      <Typography>
        <h1 style={{ paddingBottom: 15 }} className='heading'>
          Hard Skills{' '}
        </h1>
      </Typography>
      <br />
      <Carousel
        className='HardSkills'
      >
        {items.map((item, index) => (
          <Banner item={item} key={index} />
        ))}
      </Carousel>
      <br />
    </div>
  )
}

const Banner = (props) => {
  const items = []
  for (let i = 0; i <= 5; i++) {
    const item = props.item.Items[i]

    const media = (
      <Grid item xs={2} key={item.Name}>
        <CardMedia
          className='Media'
          image={item.Image}
          title={item.Name}
        >
          {/* <Typography className='MediaCaption'>
            {item.Name}
          </Typography> */}
        </CardMedia>
      </Grid>
    )

    items.push(media)
  }

  return (
    <Card raised className='Banner'>
      <Grid container spacing={1} className='BannerGrid'>
        {items}
      </Grid>
    </Card>
  )
}

const items = [
  {
    Name: 'Languages',
    Caption: 'Electrify your friends!',
    Items: [
      {
        Name: 'NodeJS',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-node-js-3-1174937.png?f=avif&w=256'
      },
      {
        Name: 'Java',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-java-57-1174929.png?f=avif&w=256'
      },
      {
        Name: 'Python',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png?f=avif&w=256'
      },
      {
        Name: 'C',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-c-58-1175247.png?f=avif&w=256'
      },
      {
        Name: 'JavaScript',
        Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png'
      },
      {
        Name: 'TypeScript',
        Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'
      }
    ]
  },
  {
    Name: 'Databases',
    Caption: 'Say no to manual home labour!',
    Items: [
      {
        Name: 'MySQL',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-mysql-21-1174941.png?f=avif&w=256'
      },
      {
        Name: 'ElasticSearch',
        Image: 'https://media.licdn.com/dms/image/C4E12AQFEDEuSTW278w/article-inline_image-shrink_1500_2232/0/1556889713494?e=1694044800&v=beta&t=mfoYzuOAPcoXxqYVflT9ady4P79wnKhPM__O31bQ07w'
      },
      {
        Name: 'MongoDB',
        Image: 'https://www.returngis.net/wp-content/uploads/2019/08/MongoDB-logo.jpg'
      },
      {
        Name: 'PostgreSQL',
        Image: 'https://blog.desdelinux.net/wp-content/uploads/2018/10/postgresql.jpeg.webp'
      },
      {
        Name: 'Splunk',
        Image: 'https://appstore.good.com/appcentral-storage%2Fapps%2F15%2F82%2F14%2F91%2F44%2F40%2F1%2Fimages%2FlargeIcon_1582149144401.png?Expires=3831318014&Signature=abyYOXJiAz94wiwpDxCMTsOp4Knw79TyiIbSDYW-3Z0VJVjDDu9nzLMN7VskXUMN5rq4~KTFKGs6a5u3FbvIClxGUzZ17XkmOvJEanoIu~oW--xz3YHECKwOttb9er~QWk4FXjRRjqiQuLYY0iH9ZVP0iDNJ1pRRwrWz6dqehNap-pslVq-YRgQ5SQ5wCdINJBpNfHsQFvesm0zVsrZ6va~IhnI96SlDAA7EHjDrmw3ieux2z5AExiPl6nwdRkjfsUud55W26LN~tvWgLAIdA85QN8Am-1Q5f1fhcmezARh4LPdUqa0nDudgBQdDx6bFrjhskzt4yQ~SoF-Cz8l33A__&Key-Pair-Id=APKAJK4SYQTFZWVMO5OA'
      },
      {
        Name: 'Redis',
        Image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--iIHO9p0_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1603519527691/A0Vr68m6G.png'
      }
    ]
  },
  {
    Name: 'DevOps',
    Caption: 'Give style and color to yourliving room!',
    Items: [
      {
        Name: 'Amazon W3',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-amazonwebservices-2-1175207.png?f=avif&w=256'
      },
      {
        Name: 'Linux',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-linux-21-1174928.png?f=avif&w=256'
      },
      {
        Name: 'Docker',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-docker-10-1175197.png?f=avif&w=256'
      },
      {
        Name: 'Debian',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-debian-11-1175231.png?f=avif&w=256'
      },
      {
        Name: 'Git',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-git-16-1175195.png?f=avif&w=256'
      },
      {
        Name: 'Ansible',
        Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/800px-Ansible_logo.svg.png'
      }
    ]
  },
  {
    Name: 'Front',
    Caption: 'Give style and color to yourliving room!',
    Items: [
      {
        Name: 'HTML5',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-html5-40-1175193.png?f=avif&w=256'
      },
      {
        Name: 'CSS3',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-css3-11-1175239.png?f=avif&w=256'
      },
      {
        Name: 'React',
        Image: 'https://cdn.iconscout.com/icon/free/png-512/free-react-4-1175110.png?f=avif&w=256'
      },
      {
        Name: 'Angular',
        Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
      },
      {
        Name: 'jQuery',
        Image: 'https://repository-images.githubusercontent.com/117820810/1fd5307f-345b-455f-9795-d6655825dde5'
      },
      {
        Name: 'VueJS',
        Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png'
      }
    ]
  }
]

export default HardSkillsCarousel
