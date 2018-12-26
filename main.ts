namespace chip8 {
    scene.setBackgroundColor(1)

    const draw = () => {
        //if (!cpu.state.isDrawing) return
        // let im = cpu.state.screen.doubled()
        screen.drawImage(cpu.state.screen, 15, 30)
        cpu.state.isDrawing = false
    }


    export function initKeys() {

        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            const i = keys.indexOf("w")
            if (i !== -1) cpu.state.keys[i] = true
        })

        controller.left.onEvent(ControllerButtonEvent.Released, function () {
            const i = keys.indexOf("w")
            if (i !== -1) cpu.state.keys[i] = false
        })

        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            const i = keys.indexOf("e")
            if (i !== -1) cpu.state.keys[i] = true
        })

        controller.right.onEvent(ControllerButtonEvent.Released, function () {
            const i = keys.indexOf("e")
            if (i !== -1) cpu.state.keys[i] = false
        })


        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            const i = keys.indexOf("q")
            if (i !== -1) cpu.state.keys[i] = true
        })

        controller.up.onEvent(ControllerButtonEvent.Released, function () {
            const i = keys.indexOf("q")
            if (i !== -1) cpu.state.keys[i] = false
        })

    }

    export function init(programArray: Buffer) {

        cpu.init({})
        cpu.loadProgram(programArray)
        let ticks = 0
        game.onPaint(function () {
            cpu.runNextInstruction()
            cpu.runNextInstruction()
            cpu.runNextInstruction()
            cpu.runNextInstruction()
            cpu.runNextInstruction()
            cpu.runNextInstruction()
            draw()
            if (++ticks % 1 === 0 && cpu.state.delayTimer > 0)
                cpu.state.delayTimer--
        })

    }
}