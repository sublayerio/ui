import template from 'lodash/template'
// import store from './store'

export default (key, { bindings } = { markdown: false, bindings: null }) => {

    // const state = store.getState()

    let state = {
        translationDatas: {
            "View.no_records_for_filter_criteria_message": {
                "id": "View.no_records_for_filter_criteria_message",
                "value_en": "No records to show that meet your filter criteria",
                "value_nl": "Geen records gevonden voor de toegepaste filter criteria"
            },
            "View.empty_table_message": {
                "id": "View.empty_table_message",
                "value_en": "This table has no records",
                "value_nl": "Deze tabel heeft nog geen records"
            },
            "ViewSwitcher.rename_table_button_label": {
                "id": "ViewSwitcher.rename_table_button_label",
                "value_en": null,
                "value_nl": "Naam wijzigen"
            },
            "ViewSwitcher.import_records_button_label": {
                "id": "ViewSwitcher.import_records_button_label",
                "value_en": null,
                "value_nl": "Import"
            },
            "ViewSwitcher.clear_table_button_label": {
                "id": "ViewSwitcher.clear_table_button_label",
                "value_en": null,
                "value_nl": "Leegmaken"
            },
            "ViewSwitcher.delete_table_button_label": {
                "id": "ViewSwitcher.delete_table_button_label",
                "value_en": null,
                "value_nl": "Verwijderen"
            },
            "ViewFieldSettings.hide_all_button_label": {
                "id": "ViewFieldSettings.hide_all_button_label",
                "value_en": "Hide all",
                "value_nl": "Verberg alles"
            },
            "ViewFieldSettings.show_all_button_label": {
                "id": "ViewFieldSettings.show_all_button_label",
                "value_en": "Show all",
                "value_nl": "Toon alles"
            },
            "ViewFieldSettings.no_fields_available_to_be_hidden": {
                "id": "ViewFieldSettings.no_fields_available_to_be_hidden",
                "value_en": "No fields available to be hidden",
                "value_nl": "Geen velden beschikbaar om te verbergen"
            },
            "ViewFieldSettingsConfig.button_label": {
                "id": "ViewFieldSettingsConfig.button_label",
                "value_en": null,
                "value_nl": "Verberg velden"
            },
            "ViewFieldSettingsConfig.active_button_label": {
                "id": "ViewFieldSettingsConfig.active_button_label",
                "value_en": null,
                "value_nl": "${hiddenFieldCount} verborgen veld<% if (hiddenFieldCount > 1) { %>en<% } %>"
            },
            "There are no filters applied to this view": {
                "id": "There are no filters applied to this view",
                "value_en": "There are no filters applied to this view",
                "value_nl": "Er zijn geen filters toegepast op deze view"
            },
            "Add filter": {
                "id": "Add filter",
                "value_en": "Add filter",
                "value_nl": "Filter criteria toevoegen"
            },
            "${filterCount} filter<% if (filterCount > 1) { %>s<% } %>": {
                "id": "${filterCount} filter<% if (filterCount > 1) { %>s<% } %>",
                "value_en": "${filterCount} filter<% if (filterCount > 1) { %>s<% } %>",
                "value_nl": "${filterCount} filter<% if (filterCount > 1) { %>s<% } %>"
            },
            "Filter": {
                "id": "Filter",
                "value_en": "Filter",
                "value_nl": "Filter"
            },
            "There are no sorters applied to this view": {
                "id": "There are no sorters applied to this view",
                "value_en": "There are no sorters applied to this view",
                "value_nl": "Er zijn geen sorteer criteria toegepast op deze view"
            },
            "Add sorter": {
                "id": "Add sorter",
                "value_en": "Add sorter",
                "value_nl": "Sorteer criteria toevoegen"
            },
            "${sorterCount} sorter<% if (sorterCount > 1) { %>s<% } %>": {
                "id": "${sorterCount} sorter<% if (sorterCount > 1) { %>s<% } %>",
                "value_en": "${sorterCount} sorter<% if (sorterCount > 1) { %>s<% } %>",
                "value_nl": "${sorterCount} sorter<% if (sorterCount > 1) { %>s<% } %>"
            },
            "Sort": {
                "id": "Sort",
                "value_en": "Sort",
                "value_nl": "Sorteer"
            },
            "SorterSettings.applying_sorters_loading_message": {
                "id": "SorterSettings.applying_sorters_loading_message",
                "value_en": "Applying...",
                "value_nl": "Bijwerken..."
            },
            "Where": {
                "id": "Where",
                "value_en": "Where",
                "value_nl": "Waar"
            },
            "And": {
                "id": "And",
                "value_en": "And",
                "value_nl": "En"
            },
            "!=": {
                "id": "!=",
                "value_en": "!=",
                "value_nl": "!="
            },
            "=": {
                "id": "=",
                "value_en": "=",
                "value_nl": "="
            },
            "contains": {
                "id": "contains",
                "value_en": "contains",
                "value_nl": "bevat"
            },
            "does not contain": {
                "id": "does not contain",
                "value_en": "does not contain",
                "value_nl": "bevat niet"
            },
            "is empty": {
                "id": "is empty",
                "value_en": "is empty",
                "value_nl": "is leeg"
            },
            "is not empty": {
                "id": "is not empty",
                "value_en": "is not empty",
                "value_nl": "is niet leeg"
            },
            "Hide fields": {
                "id": "Hide fields",
                "value_en": "Hide fields",
                "value_nl": "Velden"
            },
            "${count} hidden fields": {
                "id": "${count} hidden fields",
                "value_en": "${count} hidden fields",
                "value_nl": "${count} verborgen velden"
            },
            "${count} sorters": {
                "id": "${count} sorters",
                "value_en": "${count} sorters",
                "value_nl": "${count} sorteer criteria"
            },
            "Untitled": {
                "id": "Untitled",
                "value_en": "Untitled",
                "value_nl": "Naamloos"
            },
            "Checked": {
                "id": "Checked",
                "value_nl": "Checked"
            },
            "Files & Media": {
                "id": "Files & Media",
                "value_en": "Files & Media",
                "value_nl": "Bestanden & Media"
            },
            "Checkbox": {
                "id": "Checkbox",
                "value_en": "Checkbox",
                "value_nl": "Checkbox"
            },
            "Date": {
                "id": "Date",
                "value_en": "Date",
                "value_nl": "Datum"
            },
            "Relation": {
                "id": "Relation",
                "value_en": "Relation",
                "value_nl": "Relatie"
            },
            "Long text": {
                "id": "Long text",
                "value_en": "Long text",
                "value_nl": "Content"
            },
            "Multiple select": {
                "id": "Multiple select",
                "value_en": "Multiple select",
                "value_nl": "Multi-selecteer"
            },
            "Number": {
                "id": "Number",
                "value_en": "Number",
                "value_nl": "Nummer"
            },
            "Single line text": {
                "id": "Single line text",
                "value_en": "Single line text",
                "value_nl": "Tekst"
            },
            "Single select": {
                "id": "Single select",
                "value_en": "Single select",
                "value_nl": "Selecteer"
            },
            "is not": {
                "id": "is not",
                "value_en": "is not",
                "value_nl": "is niet"
            },
            "is": {
                "id": "is",
                "value_en": "is",
                "value_nl": "is"
            },
            "is any of": {
                "id": "is any of",
                "value_en": "is any of",
                "value_nl": "is een van"
            },
            "is none of": {
                "id": "is none of",
                "value_en": "is none of",
                "value_nl": "is geen van"
            },
            "has any of": {
                "id": "has any of",
                "value_en": "has any of",
                "value_nl": "heeft enkele(n) van"
            },
            "has all of": {
                "id": "has all of",
                "value_en": "has all of",
                "value_nl": "heeft alles van"
            },
            "has none of": {
                "id": "has none of",
                "value_en": "has none of",
                "value_nl": "heeft geen van"
            },
            "filename": {
                "id": "filename",
                "value_en": "filename",
                "value_nl": "bestandsnaam"
            },
            "filetype": {
                "id": "filetype",
                "value_en": "filetype",
                "value_nl": "bestandstype"
            },
            "Short": {
                "id": "Short",
                "value_nl": "Gecondenseerd"
            },
            "Medium": {
                "id": "Medium",
                "value_nl": "Normaal"
            },
            "Tall": {
                "id": "Tall",
                "value_nl": "Groot"
            },
            "Extra Tall": {
                "id": "Extra Tall",
                "value_nl": "Extra groot"
            },
            "Unchecked": {
                "id": "Unchecked",
                "value_nl": "Unchecked"
            },
            "Unique": {
                "id": "Unique",
                "value_nl": "Uniek"
            },
            "Percent Unchecked": {
                "id": "Percent Unchecked",
                "value_nl": "Percentage Unchecked"
            },
            "Percent Checked": {
                "id": "Percent Checked",
                "value_nl": "Percentage Checked"
            },
            "Percent Unique": {
                "id": "Percent Unique",
                "value_nl": "Percentage Uniek"
            },
            "Total Attachment Size": {
                "id": "Total Attachment Size",
                "value_nl": "Bestandsgrootte Opgeteld"
            },
            "Standard Deviation": {
                "id": "Standard Deviation",
                "value_nl": "Standaardafwijking"
            },
            "Histogram": {
                "id": "Histogram",
                "value_nl": "Histogram"
            },
            "Range": {
                "id": "Range",
                "value_nl": "Bereik"
            },
            "Rng": {
                "id": "Rng",
                "value_nl": "Rng"
            },
            "Median": {
                "id": "Median",
                "value_nl": "Mediaan"
            },
            "Mdn": {
                "id": "Mdn",
                "value_nl": "Mdn"
            },
            "Min": {
                "id": "Min",
                "value_nl": "Min"
            },
            "Max": {
                "id": "Max",
                "value_nl": "Max"
            },
            "Average": {
                "id": "Average",
                "value_nl": "Gemiddelde"
            },
            "Sum": {
                "id": "Sum",
                "value_nl": "Som"
            },
            "Date Range (days)": {
                "id": "Date Range (days)",
                "value_nl": "Datum Bereik (dagen)"
            },
            "Date Range (months)": {
                "id": "Date Range (months)",
                "value_nl": "Datum Bereik (maanden)"
            },
            "Earliest Date": {
                "id": "Earliest Date",
                "value_nl": "Vroegste Datum"
            },
            "Latest Date": {
                "id": "Latest Date",
                "value_nl": "Uiterste Datum"
            },
            "Empty": {
                "id": "Empty",
                "value_nl": "Leeg"
            },
            "Filled": {
                "id": "Filled",
                "value_nl": "Gevuld"
            },
            "Percent Empty": {
                "id": "Percent Empty",
                "value_nl": "Percentage Leeg"
            },
            "Percent Filled": {
                "id": "Percent Filled",
                "value_nl": "Percentage Gevuld"
            },
            "Avg": {
                "id": "Avg",
                "value_nl": "Avg"
            },
            "Hist": {
                "id": "Hist",
                "value_nl": "Hist"
            },
            "Size": {
                "id": "Size",
                "value_nl": "Size"
            },
            "MinDate": {
                "id": "MinDate",
                "value_nl": "MinDate"
            },
            "MaxDate": {
                "id": "MaxDate",
                "value_nl": "MaxDate"
            },
            "Count All": {
                "id": "Count All",
                "value_nl": "Aantal"
            },
            "Count": {
                "id": "Count",
                "value_nl": "Aantal"
            }
        }
    }


    const translation = state.translationDatas[key]
    let value = key

    if (!translation) {
        return `translation_not_found: ${key}`
    }

    value = translation.value_nl

    if (bindings) {
        value = template(value)(bindings)
    }

    return value
}