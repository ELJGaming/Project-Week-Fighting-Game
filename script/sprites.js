const fighters = {
    huntress: {
        position: {
            x: canvasElement.width * 0.4,
            y: 15,
        },
        velocity: {
            x: 0,
            y: 0,
        },
        offset: {
            x: 215,
            y: 141,
        },
        imageSrc: '../img/Huntress/Idle.png',
        framesMax: 8,
        scale: 3,
        sprites: {
            idle: {
                imageSrc: '../img/Huntress/Idle.png',
                framesMax: 8
            },
            run: {
                imageSrc: '../img/Huntress/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: '../img/Huntress/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: '../img/Huntress/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: '../img/Huntress/Attack1.png',
                framesMax: 5
            },
            takeHit: {
                imageSrc: '../img/Huntress/Take hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: '../img/Huntress/Death.png',
                framesMax: 8
            }
        },
        attackBox: {
            offset: {
                x: 8,
                y: 50
            },
            width: 160,
            height: 50
        }
    },
    samuariMack: {
        position: {
            x: canvasElement.width * 0.4,
            y: 15,
        },
        velocity: {
            x: 0,
            y: 0,
        },
        offset: {
            x: 215,
            y: 157,
        },
        imageSrc: '../img/samauriMack/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: '../img/samauriMack/Idle.png',
                framesMax: 8
            },
            run: {
                imageSrc: '../img/samauriMack/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: '../img/samauriMack/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: '../img/samauriMack/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: '../img/samauriMack/Attack1.png',
                framesMax: 6
            },
            takeHit: {
                imageSrc: '../img/samauriMack/Take Hit - white silhouette.png',
                framesMax: 4
            },
            death: {
                imageSrc: '../img/samauriMack/Death.png',
                framesMax: 6
            }
        },
        attackBox: {
            offset: {
                x: 100,
                y: 50
            },
            width: 160,
            height: 50
        }
    },
    kenji: {
        position: {
            x: canvasElement.width * 0.8,
            y: 15,
        },
        velocity: {
            x: 0,
            y: 0,
        },
        offset: {
            x: 215,
            y: 172,
        },
        imageSrc: '../img/kenji/Idle.png',
        framesMax: 4,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: '../img/kenji/Idle.png',
                framesMax: 4
            },
            run: {
                imageSrc: '../img/kenji/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: '../img/kenji/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: '../img/kenji/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: '../img/kenji/Attack1.png',
                framesMax: 4
            },
            takeHit: {
                imageSrc: '../img/kenji/Take hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: '../img/kenji/Death.png',
                framesMax: 7
            }
        },
        attackBox: {
            offset: {
                x: -190,
                y: 50
            },
            width: 160,
            height: 50
        }
    },
    fantasyWarrior: {
        position: {
            x: canvasElement.width * 0.4,
            y: 15,
        },
        velocity: {
            x: 0,
            y: 0,
        },
        offset: {
            x: 215,
            y: 155,
        },
        imageSrc: '../img/Fantasy Warrior/Idle.png',
        framesMax: 10,
        scale: 3,
        sprites: {
            idle: {
                imageSrc: '../img/Fantasy Warrior/Idle.png',
                framesMax: 10
            },
            run: {
                imageSrc: '../img/Fantasy Warrior/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: '../img/Fantasy Warrior/Jump.png',
                framesMax: 3
            },
            fall: {
                imageSrc: '../img/Fantasy Warrior/Fall.png',
                framesMax: 3
            },
            attack1: {
                imageSrc: '../img/Fantasy Warrior/Attack1.png',
                framesMax: 7
            },
            takeHit: {
                imageSrc: '../img/Fantasy Warrior/Take hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: '../img/Fantasy Warrior/Death.png',
                framesMax: 7
            }
        },
        attackBox: {
            offset: {
                x: 8,
                y: 50
            },
            width: 160,
            height: 50
        }
    },
    evilWarrior: {
        position: {
            x: canvasElement.width * 0.4,
            y: 15,
        },
        velocity: {
            x: 0,
            y: 0,
        },
        offset: {
            x: 215,
            y: 268,
        },
        imageSrc: '../img/EVil Wizard 2/Idle.png',
        framesMax: 8,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: '../img/EVil Wizard 2/Idle.png',
                framesMax: 8
            },
            run: {
                imageSrc: '../img/EVil Wizard 2/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: '../img/EVil Wizard 2/Jump.png',
                framesMax: 2
            },
            fall: {
                imageSrc: '../img/EVil Wizard 2/Fall.png',
                framesMax: 2
            },
            attack1: {
                imageSrc: '../img/EVil Wizard 2/Attack1.png',
                framesMax: 8
            },
            takeHit: {
                imageSrc: '../img/EVil Wizard 2/Take hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: '../img/EVil Wizard 2/Death.png',
                framesMax: 7
            }
        },
        attackBox: {
            offset: {
                x: 150,
                y: 50
            },
            width: 160,
            height: 50
        }
    },
    martialHero: {
        position: {
            x: canvasElement.width * 0.4,
            y: 15,
        },
        velocity: {
            x: 0,
            y: 0,
        },
        offset: {
            x: 215,
            y: 55,
        },
        imageSrc: '../img/Martial Hero 3/Idle.png',
        framesMax: 10,
        scale: 2.5,
        sprites: {
            idle: {
                imageSrc: '../img/Martial Hero 3/Idle.png',
                framesMax: 10
            },
            run: {
                imageSrc: '../img/Martial Hero 3/Run.png',
                framesMax: 8
            },
            jump: {
                imageSrc: '../img/Martial Hero 3/Going Up.png',
                framesMax: 3
            },
            fall: {
                imageSrc: '../img/Martial Hero 3/Going Down.png',
                framesMax: 3
            },
            attack1: {
                imageSrc: '../img/Martial Hero 3/Attack1.png',
                framesMax: 7
            },
            takeHit: {
                imageSrc: '../img/Martial Hero 3/Take Hit.png',
                framesMax: 3
            },
            death: {
                imageSrc: '../img/Martial Hero 3/Death.png',
                framesMax: 11
            }
        },
        attackBox: {
            offset: {
                x: -30,
                y: 50
            },
            width: 130,
            height: 50
        }
    }
};

const maps = {
    map1: {
        position: {
            x: 0,
            y: 0
        },
        imageSrc: '../img/backgrounds/fighting-background-1.gif'
    },
    map2: {
        position: {
            x: 0,
            y: 0
        },
        imageSrc: '../gif/2map.gif'
    },
    map3: {
        position: {
            x: 0,
            y: 0
        },
        imageSrc: '../gif/map1.gif'
    }
}