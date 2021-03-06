﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using DienChanOnline.Models;

namespace DienChanOnline.Managers.Helpers
{
    public static class PagingHelper
    {
        public static MvcHtmlString PageLinks(this HtmlHelper html,
            PagingInfo pagingInfo,
            Func<int, string> pageUrl)
        {
            var result = new StringBuilder();

            for (var i = 1; i <= pagingInfo.TotalPages; i++)
            {
                var tag = new TagBuilder("a");

                tag.MergeAttribute("href", pageUrl(i));

                tag.InnerHtml = i.ToString();

                if (i == pagingInfo.CurrentPage)
                {
                    tag.AddCssClass("selected");

                    tag.AddCssClass("btn-primary");
                }

                tag.AddCssClass("btn btn-default");

                result.Append(tag);
            }

            return MvcHtmlString.Create(result.ToString());
        }
    }
}