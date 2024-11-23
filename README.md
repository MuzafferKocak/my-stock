My Stock - Bestandsverwaltungs-App

My Stock ist eine Anwendung zur Verwaltung von Beständen, mit der Benutzer ihre Produkte einfach verwalten können. Diese App enthält grundlegende Funktionen wie Verkaufs-, Einkaufs-, Produkt-, Marken- und Firmendatenverwaltung. Benutzer können sich anmelden, ein Konto erstellen, ihre Produkte hinzufügen und bearbeiten sowie den Bestand überwachen.

Funktionen
Benutzerkontoverwaltung: Benutzer können ein Konto erstellen, sich anmelden und ihre Kontoinformationen verwalten.
Bestandsverwaltung: Produkte können hinzugefügt, bearbeitet und gelöscht werden. Detaillierte Produktinformationen werden gespeichert.
Verkaufs- und Einkaufsüberwachung: Benutzer können Verkaufs- und Kauftransaktionen überwachen.
Marken- und Firmenverwaltung: Produkte können mit Marken und Firmen verknüpft werden.
Technologien
Frontend:
React
Material UI
Formik & Yup (Formularvalidierung)
React Router (Routing)
Installation und Start
Notwendige Anforderungen
Um das Projekt auf deinem Rechner auszuführen, folge diesen Schritten:

Repository klonen
bash
Code kopieren
git clone https://github.com/MuzafferKocak/stock-app.git
Abhängigkeiten installieren
Öffne das Terminal und installiere die benötigten Abhängigkeiten für das Frontend:

bash
Code kopieren
npm install
App starten
Starte die App im Entwicklungsmodus:

bash
Code kopieren
npm start
Die Anwendung wird unter http://localhost:3000 verfügbar sein.

Umgebungsvariablen
Für die richtige Funktion der App musst du möglicherweise einige Umgebungsvariablen definieren. Erstelle eine .env-Datei und füge die folgenden Beispiele hinzu:

arduino
Code kopieren
REACT_APP_API_URL=
Benutzeroberfläche
Login: Benutzer melden sich mit ihrer E-Mail und ihrem Passwort an.

Register: Neue Benutzer können ein Konto erstellen, indem sie ihre E-Mail-Adresse, ein Passwort und einen Benutzernamen angeben.

Dashboard: Benutzer können ihre Bestände und wichtige Informationen auf der Hauptseite einsehen.

Produktverwaltung: Benutzer können Produkte hinzufügen, bearbeiten und löschen.

Verkäufe und Käufe: Benutzer können ihre Verkaufs- und Kauftransaktionen verwalten.

Mitwirken
Wenn du zur Entwicklung der App beitragen möchtest, folge diesen Schritten:

Forke das Repository.
Erstelle einen neuen Branch (git checkout -b feature/deine-funktion).
Nimm deine Änderungen vor und committe sie (git commit -am 'Neue Funktion hinzufügen').
Pushe deinen Branch (git push origin feature/deine-funktion).
Öffne einen Pull Request.