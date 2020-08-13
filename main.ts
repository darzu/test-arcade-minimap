tiles.setTilemap(tiles.createTilemap(hex`080008000102030b161414000809040c001300000706050d0e1110000a0a0a0a00120f00210000222324201f1a19181b1c272825001d002b2c292a000000000000000000`, img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark0,sprites.dungeon.floorMixed,sprites.dungeon.floorLight5,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.greenOuterNorth2,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.stairSouth,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock2,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.buttonTeal,sprites.dungeon.buttonPink,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal], TileScale.Sixteen))
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(5, 5))
let map = minimap.minimap(MinimapScale.Half, 2, 1)
minimap.includeSprite(map, mySprite2, MinimapSpriteScale.Double)
let mySprite = sprites.create(minimap.getImage(map), SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
