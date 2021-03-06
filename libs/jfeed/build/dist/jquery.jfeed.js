/* jFeed : $ feed parser plugin
 * Copyright (C) 2007 Jean-François Hovinne - http://www.hovinne.com/
 * Dual licensed under the MIT (MIT-license.txt)
 * and GPL (GPL-license.txt) licenses.
 */

$(document).ready(function() {
    $.getFeed = function(options) {

        options = $.extend({
        
            url: null,
            data: null,
            success: null,
            error: null
            
        }, options);

        if(options.url) {

            $.ajax({
                type: 'GET',
                url: options.url,
                data: options.data,
                dataType: 'xml',
                success: function(xml) {
                    var feed = new JFeed(xml);
                    if($.isFunction(options.success)) options.success(feed);
                }
            }).fail(options.error);
        }
    };

    function JFeed(xml) {
        if(xml) this.parse(xml);
    };

    JFeed.prototype = {

        type: '',
        version: '',
        title: '',
        link: '',
        description: '',
        parse: function(xml) {
            
            if($('channel', xml).length == 1) {
            
                this.type = 'rss';
                var feedClass = new JRss(xml);

            } else if($('feed', xml).length == 1) {
            
                this.type = 'atom';
                var feedClass = new JAtom(xml);
            }
            
            if(feedClass) $.extend(this, feedClass);
        }
    };

    function JFeedItem() {};

    JFeedItem.prototype = {

        title: '',
        link: '',
        description: '',
        updated: '',
        published: '',
        id: ''
    };

    function JAtom(xml) {
        this._parse(xml);
    };

    JAtom.prototype = {
        
        _parse: function(xml) {
        
            var channel = $('feed', xml).eq(0);

            this.version = '1.0';
            this.title = $(channel).find('title:first').text();
            this.link = $(channel).find('link:first').attr('href');
            this.description = $(channel).find('subtitle:first').text();
            this.language = $(channel).attr('xml:lang');
            this.updated = $(channel).find('updated:first').text();
            this.published = $(channel).find('published:first').text();
        //    console.log($(channel));
            
            this.items = new Array();
            
            var feed = this;
            
            $('entry', xml).each( function() {
            
                var item = new JFeedItem();
                
                item.title = $(this).find('title').eq(0).text();
                item.link = $(this).find('link').eq(0).attr('href');
                item.description = $(this).find('content').eq(0).text();
                item.updated = $(this).find('updated').eq(0).text();
                item.id = $(this).find('id').eq(0).text();
                item.published = $(this).find('published').eq(0).text();
                
                feed.items.push(item);
            });
        }
    };

    function JRss(xml) {
        this._parse(xml);
    };

    JRss.prototype  = {
        
        _parse: function(xml) {
        
            if($('rss', xml).length == 0) 
                this.version = '1.0';
            else 
                this.version = $('rss', xml).eq(0).attr('version');

            var channel = $('channel', xml).eq(0);
        
            this.title = $(channel).find('title:first').text();
            this.link = $(channel).find('link:first').text();
            this.description = $(channel).find('description').text();
            this.language = $(channel).find('language:first').text();
            this.updated = $(channel).find('lastBuildDate:first').text();
        //    console.log($(channel));

            this.items = new Array();
            
            var feed = this;
            
            $('item', xml).each( function() {
            
                var item = new JFeedItem();
                
                item.title = $(this).find('title').eq(0).text();
                item.link = $(this).find('link').eq(0).text();
                item.description = $(this).find('encoded').eq(0).text();
                if (!item.description)
                    item.description = $(this).find('content\\:encoded').eq(0).text();
                item.updated = $(this).find('pubDate').eq(0).text();
                item.published = item.updated;
                item.id = $(this).find('guid').eq(0).text();
            //    console.log(item);

                feed.items.push(item);
            });
        }
    };
});

