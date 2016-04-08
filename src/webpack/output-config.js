import env from '../env'
import path from 'path'

export default {
    path: path.join(__dirname, '../../assets'),
    publicPath: '/assets/',
    filename: '[name]-' + (env.HOT ? '[hash]' : '[chunkhash]') + '.js'
}
