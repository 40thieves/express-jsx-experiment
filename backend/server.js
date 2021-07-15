const path = require('path')
const express = require('express')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'js')
app.engine(
  'js',
  require('express-react-views').createEngine({
    babel: {
      // Ensure that all files are transpiled, not just the "top-level" files
      only: null,

      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  })
)

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, () => console.log('Server started on port 3000'))
