---
layout:     page
title:      Anmeldung
permalink:  /anmeldung/
---

<form action="https://getform.org/f/3e5f9f13-a9b6-4924-95b1-5b5ec903e4b6" method="POST">
<!--<form id="registrationForm" class="c-form" action="https://getsimpleform.com/messages?form_api_token=a86e06c423eea17e2c269e9a7bd12e7c" method="post">-->
    <!--<input type='hidden' name='redirect_to' value='http://www.waldenses.org/empfangsbestaetigung/' />-->

    <div class="c-alert c-alert--primary">
        <strong>Anmeldeschluss:</strong> 15. November 2017
    </div>

    <fieldset>

        <legend>Preisübersicht</legend>

        <div class="u-owl">
            <table class="c-table c-table--pricing u-text-left">
                <thead>
                    <tr>
                        <th></th>
                        <th>Normal</th>
                        <th>Ermäßigt <span class="u-text-normal">für ASI-Mitglieder</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            Erwachsene
                            <small class="u-text-normal">
                                <br>inklusive Verpflegung
                                <br>2x Mittag- &amp; 2x Abendessen,
                                <br><strong>ohne Unterkunft,</strong>
                                <br><strong>ohne Frühstück</strong>
                            </small>
                        </th>
                        <td>99,00 €</td>
                        <td>89,00 €</td>
                    </tr>
                    <tr>
                        <th>Kinder bis 14 Jahre</th>
                        <td>frei</td>
                        <td>frei</td>
                    </tr>
                </tbody>
            </table>

            <p><small>Verpflegung in der Wasserburg Turow: <strong>vegan/vegetarisch</strong> (glutenfrei auf Anfrage möglich)</small></p>

            <div class="c-alert c-alert--secondary">
                <strong>Die Unterkunft muss separat und selbst gebucht werden. Wir haben dazu eine Liste von <a href="/unterkunft/">Unterkünften in der Nähe</a> zusammengestellt.</strong>
            </div>
        </div>

    </fieldset>

    <fieldset>

        <legend>Persönliche Informationen</legend>

        <p class="u-text-small u-margin-bottom-small">Bitte jedes Familienmitglied separat anmelden.</p>

        <ul class="o-layout u-owl u-owl--small">
            <li class="o-layout__item u-1/2@tablet">
                <label class="c-form__label" for="first-name">Vorname <sup>*</sup></label>
                <input type="text" id="first-name" name="Vorname" autocomplete="first-name" required>
            </li>
            <li class="o-layout__item u-1/2@tablet">
                <label class="c-form__label" for="last-name">Nachname <sup>*</sup></label>
                <input type="text" id="last-name" name="Nachname" autocomplete="last-name" required>
            </li>
            <li class="o-layout__item u-1/2@tablet">
                <label class="c-form__label" for="birthdate">Geburtsdatum <sup>*</sup></label>
                <input type="date" class="u-1/1" id="birthdate" name="Geburtsdatum" autocomplete="bday birthday date-of-birth" placeholder="XX.XX.XXXX" required>
            </li>
        </ul>

    </fieldset>

    <fieldset>

        <legend>Kontaktdaten</legend>

        <p class="u-text-small u-margin-bottom-small">Für Kinder bitte die Kontaktdaten eines Elternteils eintragen.</p>

        <div class="o-layout u-owl u-owl--small">
            <ul class="o-layout__item u-1/2@tablet u-owl u-owl--small">

                <li>
                    <label class="c-form__label" for="email">E-Mail <sup>*</sup></label>
                    <input type="email" class="u-1/1" id="email" name="E-Mail" autocomplete="home email" required>
                </li>
                <li>
                    <label class="c-form__label" for="phone">Telefon</label>
                    <input type="tel" id="phone" name="Telefon" autocomplete="home tel phone home-phone">
                </li>

            </ul>
            <div class="o-layout__item u-1/2@tablet">
                <ul class="o-layout u-owl u-owl--small">

                    <li class="o-layout__item">
                        <label class="c-form__label" for="address">Adresse <sup>*</sup></label>
                        <input type="text" id="address" name="Adresse" autocomplete="address street-address" required>
                    </li>
                    <li class="o-layout__item u-1/3@tablet">
                        <label class="c-form__label" for="zipcode">PLZ <sup>*</sup></label>
                        <input type="number" id="zipcode" name="PLZ" autocomplete="postal-code" required minlength="5" maxlength="5">
                    </li>
                    <li class="o-layout__item u-2/3@tablet">
                        <label class="c-form__label" for="city">Stadt <sup>*</sup></label>
                        <input type="text" id="city" name="Stadt" autocomplete="city address-level2" required>
                    </li>
                    <li class="o-layout__item">
                        <label class="c-form__label" for="country">Land <sup>*</sup></label>
                        <input type="text" id="country" name="Land" autocomplete="country-name" value="Deutschland" required>
                    </li>

                </ul>
            </div>
        </div>

    </fieldset>

    <fieldset>

        <legend>Buchungsoptionen</legend>

        <ul class="o-layout u-owl u-owl--small">
            <li class="o-layout__item u-1/2@tablet">
                <div class="c-form__label">ASI Mitglied <sup>*</sup></div>
                <div class="c-form__radio-group">
                    <label class="c-form__radio-btn" for="ja">
                        <input id="ja" type="radio" name="ASI Mitglied" value="Ja" required> Ja
                    </label><!--
                    --><label class="c-form__radio-btn" for="nein">
                        <input id="nein" type="radio" name="ASI Mitglied" value="Nein" required checked="checked"> Nein
                    </label>
                </div>
            </li>
            <li class="o-layout__item">
                <label class="c-form__label" for="comment">Kommentar</label>
                <textarea id="comment" name='content' placeholder="Fragen bitte separat an die unten angegebene Email senden"></textarea>
            </li>
        </ul>

    </fieldset>

    <p class="">Mit <sup>*</sup> markierte Felder sind Pflichtfelder.</p>

    <div class="o-layout u-owl u-owl--bottom u-text-center">
        <div class="o-layout__item u-1/2@tablet u-1/3@desktop">
            <button type="submit" class="c-btn c-btn--primary">Anmeldung absenden</button>
        </div>
        <div class="o-layout__item u-1/2@tablet u-1/3@desktop">
            <a href="/unterkunft/" class="c-btn c-btn--primary c-btn--ghost">Unterkunft</a>
        </div>
        <div class="o-layout__item u-1/1@tablet u-1/3@desktop">
            Kontakt bei Fragen:
            <br><noscript defuscate data-name="jahrestagung" data-domain="asigermany.org"><em>Diese E-Mail-Adresse ist durch JavaScript geschützt</em></noscript>
        </div>
    </div>

</form>

<hr class="u-mt u-mb+">


## Zahlungsinformationen

Die Zahlung erfolgt auf das Bankkonto von ASI Deutschland e.V. Die Anmeldung ist erst nach dem Zahlungseingang gültig.

### Bankverbindung

<pre>
ASI Deutschland e.V.
Kreissparkasse Waiblingen
IBAN: DE51 6025 0010 0015 1194 05
BIC: SOLADES1WBN
</pre>

Als Verwendungszweck bitte ```ASI-TAGUNG 2017 NAME``` verwenden und ```NAME``` mit dem vollständigen **Vor- und Nachnamen** ersetzen.

<div class="c-alert">
    Bitte vergesst nicht, rechtzeitig eine geeignete <a href="/unterkunft/">Unterkunft</a> zu buchen.
</div>