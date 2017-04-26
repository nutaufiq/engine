<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$config['level_auth'] = array(
		'1' => array(
				'admin'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> true,
						'edit'		=> true,
						'delete'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
						'signout'	=> true,
					),
				'user'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
					),
				'feedback'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
					),
				'peraturanpajak'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> true,
						'edit'		=> true,
						'delete'	=> true,
						'delete_pdf'=> true,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					),
				'putusanpengadilan'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> true,
						'edit'		=> true,
						'delete'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					),
				'p3b'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> true,
						'edit'		=> true,
						'delete'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					),
				'mahkamahagung'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> true,
						'edit'		=> true,
						'delete'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					)
			),
		'2' => array(
				'admin'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> false,
						'edit'		=> false,
						'delete'	=> false,
						'publish'	=> false,
						'unpublish'	=> false,
						'signout'	=> true,
					),
				'user'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
					),
				'feedback'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
					),
				'peraturanpajak'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> true,
						'edit'		=> true,
						'delete'	=> true,
						'delete_pdf'=> true,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					),
				'putusanpengadilan'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> true,
						'edit'		=> true,
						'delete'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					),
				'p3b'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> true,
						'edit'		=> true,
						'delete'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					),
				'mahkamahagung'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> true,
						'edit'		=> true,
						'delete'	=> true,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					)
			),
		'3' => array(
				'admin'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> false,
						'edit'		=> false,
						'delete'	=> false,
						'publish'	=> false,
						'unpublish'	=> false,
						'signout'	=> true,
					),
				'user'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'publish'	=> false,
						'unpublish'	=> false,
					),
				'feedback'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'publish'	=> false,
						'unpublish'	=> false,
					),
				'peraturanpajak'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> false,
						'edit'		=> true,
						'delete'	=> false,
						'delete_pdf'=> false,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					),
				'putusanpengadilan'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> false,
						'edit'		=> true,
						'delete'	=> false,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					),
				'p3b'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> false,
						'edit'		=> true,
						'delete'	=> false,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					),
				'mahkamahagung'	=> array(
						'index'		=> true,
						'get_json'	=> true,
						'add'		=> false,
						'edit'		=> true,
						'delete'	=> false,
						'publish'	=> true,
						'unpublish'	=> true,
						'view'		=> true,
						'semua'		=> true,
					)
			)
	);
