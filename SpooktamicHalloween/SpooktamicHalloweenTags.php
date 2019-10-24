<?php 

namespace Statamic\Addons\SpooktamicHalloween;

use Statamic\API\URL;
use Statamic\Extend\Tags;

class SpooktamicHalloweenTags extends Tags
{
    public function head()
    {
        $active = $this->getConfigBool('active');
        $blacklist_pages = $this->getConfig('blacklist_pages', []);
        $ctx = $this->context;
        $blacklisted = collect($blacklist_pages)->contains(function($i, $value) use ($ctx) {
            return collect($ctx)->get('uri') == URL::makeRelative($value['url']);
        });
        if($blacklisted) $active = false;

        if(!$active) return null;

        $resources_url = '/_resources/addons/' . basename(__DIR__);
        $css = "<link rel='stylesheet' type='text/css' href='$resources_url/css/spooktamic.css' />";
        $script = "<script type='application/javascript' src='$resources_url/js/spooktamic.js'></script>";

        $speed = $this->getConfigInt('speed', 1);
        if($speed > 10) $speed = 10;
        $timeout = $this->getConfig('timeout', 5);

        $script_settings = "<script id='spooktamic_settings' type='application/json'>{ \"speed\": $speed, \"timeout\": $timeout }</script>";
        return implode(PHP_EOL, [$script_settings, $css, $script]);
    }
}