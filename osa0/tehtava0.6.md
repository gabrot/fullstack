```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: Käyttäjä kirjoittaa muistiinpanon ja painaa "Save"

    browser->>server: POST /new_note_spa
    activate server
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: Selain lisää muistiinpanon suoraan DOMiin ilman sivun uudelleenlatausta
```