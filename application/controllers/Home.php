<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct()
	{
    	parent::__construct();

    	$this->load->model('user_model');
    	$this->load->model('jenis_dokumen_model');

    	$this->load->library('facebook');

    	if(!isset($_COOKIE['firsttime']))
		{
		    setcookie("firsttime", "no", time() + (86400 * 30));
		    //redirect('welcome');
		}
	}

	public function index()
	{
		//----------------------
    	//GET Facebook Login URL
    	//----------------------
    	/*$fb_data = $this->facebook->login();

    	if(!isset($fb_data['me']))
    	{
    		$data['facebook_login'] = $fb_data['loginUrl'];
    	}
    	else
    	{
    		$data['facebook_login'] = '';
    	}*/
    	//----------------------

    	//----------------------
        //GET Facebook Login URL
        //----------------------
        if($this->session->userdata('fb_data'))
        {
            $session = $this->session->userdata();
            $loginUrl = $session['fb_data']['loginUrl'];

            $data['facebook_login'] = $loginUrl;
        }
        else
        {
            $fb_data = $this->facebook->login();

            if(!isset($fb_data['me']))
            {
                $data['facebook_login'] = $fb_data['loginUrl'];
            }
            else
            {
                $data['facebook_login'] = '';
            }
        }
        //----------------------

    	//----------------------
    	//Home SEARCH validation
    	//----------------------
		$this->load->library('form_validation');
		$this->form_validation->set_rules('key', 'Key word', 'trim|required');
		$this->form_validation->set_error_delimiters('<p class="help-block">', '</p>');

		if($this->form_validation->run() == FALSE)
		{
			//$data['jenis_dokumen'] = $this->jenis_dokumen_model->get_all_publish_order_by('jenis_dokumen_name', 'desc');

			$this->template->set('title', 'Home - '.$this->config->item('web_title'));
			$this->template->load('web/template/template-1', 'web/home/home', $data);
		}
		else
		{
			//$jenis_dokumen_array = $this->input->post('jenis_dokumen');
			$key = $this->input->post('key');

			/*if(!empty($jenis_dokumen_array))
			{
				$jenis_dokumen_url = implode('_', $jenis_dokumen_array);
			}
			else
			{
				$jenis_dokumen_url = 'semua-dokumen';
			}*/

			$key_url = url_title($key, '_', TRUE);

			$data_key_session = array('key_session' => $key);
			$this->session->set_userdata($data_key_session);

			redirect('peraturan-pajak/search_all/'.$key_url.'/semua-kategori/semua-dokumen/00-00-0000_00-00-0000/0000/0_0/kalimat/0/tahun');
		}
		//----------------------
	}
	
	public function info()
	{
		echo phpinfo();
	}

	public function session()
	{
		echo '<pre>';
		print_r($this->session->all_userdata());
		echo '</pre>';

		$cookie_ma = get_cookie('cookie_ma');
		$cookie_ma_text = get_cookie('cookie_ma_text');

		var_dump($cookie_ma);
		var_dump($cookie_ma_text);
	}
}
