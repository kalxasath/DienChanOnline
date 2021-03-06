﻿using System;
using System.Globalization;
using System.Net;
using DienChanOnline.Models.Structs;

namespace DienChanOnline.Managers
{
    public static class ReferenceManager
    {
        public static string ToCurrency(this decimal m, CurrencyType c)
        {
            switch (c)
            {
                case CurrencyType.Euro:
                    return m.ToString("c", CultureInfo.GetCultureInfo("fr-FR"));
                default:
                    return m.ToString("c");
            }
        }

        public static string Translate(this string text, string languagePair)
        {
            var url = $"http://www.google.com/translate_t?hl=en&ie=UTF8&text={text}&langpair={languagePair}";

            var webClient = new WebClient {Encoding = System.Text.Encoding.UTF8};

            var result = webClient.DownloadString(url);

            result = result.Substring(result.IndexOf("<span title=\"", StringComparison.Ordinal) + "<span title=\"".Length);

            result = result.Substring(result.IndexOf(">", StringComparison.Ordinal) + 1);

            result = result.Substring(0, result.IndexOf("</span>", StringComparison.Ordinal));

            return result.Trim().ToTitleCase();
        }

        public static string ToTitleCase(this string text)
        {
            var textInfo = new CultureInfo("en-US", false).TextInfo;

            return textInfo.ToTitleCase(text);
        }
    }
}