import { get2dContext } from './setup'
import Settings from './Classes/Settings'

var globalSettings = new Settings(get2dContext())

globalSettings.fps = 5

globalSettings.sizeX = 300
globalSettings.sizeY = 150
globalSettings.boxSize = 9

globalSettings.vel = 10

globalSettings.tailLength = 4

export default globalSettings
