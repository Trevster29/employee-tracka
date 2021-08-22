const rewire = require("rewire")
const htmlRenderer = rewire("./htmlRenderer")
const renderEngineer = htmlRenderer.__get__("renderEngineer")
const renderIntern = htmlRenderer.__get__("renderIntern")
const renderMain = htmlRenderer.__get__("renderMain")
const replacePlaceholders = htmlRenderer.__get__("replacePlaceholders")
// @ponicode
describe("htmlRenderer", () => {
    test("0", () => {
        let callFunction = () => {
            htmlRenderer(["c466a48309794261b64a4f02cfcc3d64", "fake_user_id", "A1234", "test_user", "b'nXQpVsglEGFJgfK'", "someUser", 7588892, "someUser"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            htmlRenderer(["fake_user", 7588892, "c466a48309794261b64a4f02cfcc3d64", "b'nXQpVsglEGFJgfK'", "/people/%s/@self", "someUser", "/people/%s/@self", "c466a48309794261b64a4f02cfcc3d64"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            htmlRenderer([7588892, "c466a48309794261b64a4f02cfcc3d64", "fake_user_id", "b'nXQpVsglEGFJgfK'", "/people/%s/@self", "c466a48309794261b64a4f02cfcc3d64", "b'nXQpVsglEGFJgfK'", "someUser"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            htmlRenderer(["A1234", 7588892, "fake_user", "fake_user_id", "fake_user_id", "fake_user_id", "/people/%s/@self", "fake_user"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            htmlRenderer([7588892, "someUser", 7588892, "/people/%s/@self", "test_user", 7588892, 7588892, 7588892])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            htmlRenderer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderEngineer", () => {
    test("0", () => {
        let callFunction = () => {
            renderEngineer("ARCHIVE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderEngineer("InnoDB")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderEngineer("MEMORY")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderEngineer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderIntern", () => {
    test("0", () => {
        let callFunction = () => {
            renderIntern("Nile Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderIntern("Dwarf Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderIntern("Australian Freshwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderIntern("Saltwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            renderIntern("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            renderIntern(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderMain", () => {
    test("0", () => {
        let callFunction = () => {
            renderMain("a<a [onclick]=\"click\">b</a>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderMain("<html> HTML </html>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderMain("<source src=\"http://www.google.com\">")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderMain(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("replacePlaceholders", () => {
    test("0", () => {
        let callFunction = () => {
            replacePlaceholders("https://accounts.google.com/o/oauth2/revoke?token=%s", 0.0, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            replacePlaceholders("http://www.croplands.org/account/confirm?t=", 0, "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            replacePlaceholders("http://www.example.com/route/123?foo=bar", 0, "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            replacePlaceholders("http://www.example.com/route/123?foo=bar", 1, "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            replacePlaceholders("ponicode.com", "bar", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            replacePlaceholders("", Infinity, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
