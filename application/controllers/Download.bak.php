<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Download extends MY_Controller {

	public function __construct()
    {
        parent::__construct();

        $this->load->model('user_model');
    }
		
	public function index()
	{	
		redirect('/');
	}
		
	public function pp()
	{	
		if($this->user_auth->is_logged_in())
		{
			$type = $this->uri->segment(2);
			$id = $this->uri->segment(3);
			if($type && $id) {
				$pp = $this->putusan_pengadilan_model->get($id);
				if(!empty($pp)) {
					$nomor = $pp['name'];
					$nomor = strtolower($nomor);
					$nomor = str_replace(array(' ','.','/'), '-', $nomor);
					$filename = 'document-'.$type.'-'.$nomor.'.pdf';
					$fullPath = FCPATH . 'assets/download/cetak/'.$filename;
					$dataexist = @file_get_contents($fullPath);
					//if(file_exists($fullPath)) {
						//force_download($filename, $dataexist);
					//} else {
						$path = @file_get_contents('http://103.23.20.139/convertpdf/?url='.base_url().'cetak/'.$type.'/'.$id);
						if($path === FALSE) {
							exit('error download');
						}
						//file_put_contents($fullPath, $path);

						/*count download start*/
						$download = $pp['download'];
						$download++;
						$data_update = array('download' => $download);
						$this->putusan_pengadilan_model->update($id, $data_update);
						/*count download end*/

						force_download($filename, $path);
					//}
				} else {
					redirect('/');
				}
			} else {
				echo 'all fields required';
			}
		} 
		else 
		{
			redirect('/');
		}
	}
		
	public function rp()
	{	
		if($this->user_auth->is_logged_in())
		{
			$type = $this->uri->segment(2);
			$id = $this->uri->segment(3);
			if($type && $id) {
				$regulasi_pajak = $this->regulasi_pajak_model->get($id);
				if(!empty($regulasi_pajak)) {
					$nomor = $regulasi_pajak['nomordokumen'];
					$nomor = strtolower($nomor);
					$nomor = str_replace(array(' ','.','/'), '-', $nomor);
					$filename = 'document-'.$type.'-'.$nomor.'.pdf';
					$fullPath = FCPATH . 'assets/download/cetak/'.$filename;
					$dataexist = @file_get_contents($fullPath);
					//if(file_exists($fullPath)) {
					//	force_download($filename, $dataexist);
					//} else {
						$path = @file_get_contents('http://103.23.20.139/convertpdf/?url='.base_url().'cetak/'.$type.'/'.$id);
						if($path === FALSE) {
							exit('error download');
						}
					//	file_put_contents($fullPath, $path);

						/*count download start*/
						$download = $regulasi_pajak['download'];
						$download++;
						$data_update = array('download' => $download);
						$this->regulasi_pajak_model->update($id, $data_update);
						/*count download end*/

						force_download($filename, $path);
					//}
				} else {
					redirect('/');
				}
			} else {
				echo 'all fields required';
			}
		} 
		else 
		{
			redirect('/');
		}
	}
		
	public function ma()
	{	
		if($this->user_auth->is_logged_in())
		{
			$type = $this->uri->segment(2);
			$id = $this->uri->segment(3);
			if($type && $id) {
				$ma = $this->putusan_ma_model->get($id);
				if(!empty($ma)) {
					$nomor = $ma['ma_number'];
					$nomor = strtolower($nomor);
					$nomor = str_replace(array(' ','.','/'), '-', $nomor);
					$filename = 'document-'.$type.'-'.$nomor.'.pdf';
					$fullPath = FCPATH . 'assets/download/cetak/'.$filename;
					$dataexist = @file_get_contents($fullPath);
					//if(file_exists($fullPath)) {
					//	force_download($filename, $dataexist);
					//} else {
						$path = @file_get_contents('http://103.23.20.139/convertpdf/?url='.base_url().'cetak/'.$type.'/'.$id);
						if($path === FALSE) {
							exit('error download');
						}
					//	file_put_contents($fullPath, $path);

						/*count download start*/
						$download = $ma['ma_download'];
						$download++;
						$data_update = array('ma_download' => $download);
						$this->putusan_ma_model->update($id, $data_update);
						/*count download end*/

						force_download($filename, $path);
					//}
				} else {
					redirect('/');
				}
			} else {
				echo 'all fields required';
			}
		} 
		else 
		{
			redirect('/');
		}
	}
		
	public function p3b()
	{	
		if($this->user_auth->is_logged_in())
		{
			$type = $this->uri->segment(2);
			$id = $this->uri->segment(3);
			$lang = $this->uri->segment(4);
			if($type && $id && $lang) {
				$p3b = $this->p3b_model->get($id);
				if(!empty($p3b)) {
					$nomor = $p3b['p3b_country'];
					$nomor = strtolower($nomor);
					$nomor = str_replace(array(' ','.','/'), '-', $nomor);
					$filename = 'document-'.$type.'-'.$nomor.'-'.$lang.'.pdf';
					$fullPath = FCPATH . 'assets/download/cetak/'.$filename;
					$dataexist = @file_get_contents($fullPath);
					//if(file_exists($fullPath)) {
					//	force_download($filename, $dataexist);
					//} else {
						$path = @file_get_contents('http://103.23.20.139/convertpdf/?url='.base_url().'cetak/'.$type.'/'.$id.'/'.$lang);
						if($path === FALSE) {
							exit('error download');
						}
					//	file_put_contents($fullPath, $path);

						/*count download start*/
						$download = $p3b['p3b_download'];
						$download++;
						$data_update = array('p3b_download' => $download);
						$this->p3b_model->update($id, $data_update);
						/*count download end*/
						
						force_download($filename, $path);
					//}
				} else {
					redirect('/');
				}
			} else {
				echo 'all fields required';
			}
		} 
		else 
		{
			redirect('/');
		}
	}

}
